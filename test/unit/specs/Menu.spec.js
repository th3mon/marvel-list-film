import Vue from 'vue';
import Menu from '@/components/Menu';

describe('Menu', () => {
    it('Show title page', () => {
        const Constructor = Vue.extend(Menu);
        const menu = new Constructor();
        expect(menu.$data.appTitle).toBe('Marvel list film');
    });

    it('Class hide on start', () => {
        const Constructor = Vue.extend(Menu);
        const menu = new Constructor();
        expect(menu.$data.isActive).toBe(false);
    })

    it('Works toggleClass method', () => {
        const Constructor = Vue.extend(Menu);
        const menu = new Constructor();
        menu.toggleClass();
        expect(menu.$data.isActive).toBe(true);
    });
});