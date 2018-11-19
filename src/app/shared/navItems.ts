/* Items para navegacao */
import { MenuItem } from 'primeng/api';

export const NavItems: MenuItem[] = [
    {label: 'Formulário', routerLink: 'items/create', icon: 'pi pi-plus'},
    {label: 'Listagem', routerLink: 'items/list', icon: 'pi pi-list'}
];

// Define o icone e a rota para a HOME
export const NavHome: MenuItem = {
    icon: 'pi pi-home',
    routerLink: '/'
};
