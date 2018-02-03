import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	menus: Array<Menu>;

	private currentMenuId: number = 1; // 当前选中id

	constructor(private router: Router) { }

	ngOnInit() {
		let homeSubMenus = [
			new SubMenu(1, 'fa fa-circle-o', '功能1', 'home/1'),
			new SubMenu(2, 'fa fa-circle-o', '功能2', 'stock'),
			new SubMenu(3, 'fa fa-circle-o', '功能3', 'stock'),
			new SubMenu(4, 'fa fa-circle-o', '功能4', 'stock'),
			new SubMenu(4, 'fa fa-circle-o', '功能5', 'stock')];
		let chartSubMenus = [
			new SubMenu(1, 'fa fa-circle-o', '功能1', '/stock/1'),
			new SubMenu(2, 'fa fa-circle-o', '功能2', '/stock/2'),
			new SubMenu(3, 'fa fa-circle-o', '功能3', 'stock'),
			new SubMenu(4, 'fa fa-circle-o', '功能4', 'stock'),
			new SubMenu(4, 'fa fa-circle-o', '功能5', 'stock')];
		this.menus = [
			new Menu(1, 'glyphicon glyphicon-home', '首页', 'home', homeSubMenus),
			new Menu(2, 'fa fa-pie-chart', '功能管理', 'stock', chartSubMenus)
		]
	}

	nav(menu: Menu) {
		debugger;
		this.router.navigateByUrl(menu.link);
		this.currentMenuId = menu.id;
	}
	update(){
		this.router.navigateByUrl('/stock/1');
	}

}

export class Menu {
	constructor(
		public id: number,
		public icon: string,
		public name: string,
		public link: string,
		public submenus: Array<SubMenu>,
	) {

	}
}

export class SubMenu {
	constructor(
		public id: number,
		public icon: string,
		public name: string,
		public link: string
	) {

	}
}
