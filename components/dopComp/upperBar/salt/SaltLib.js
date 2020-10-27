export const saltInfoCheck = (loc) =>{
    switch (loc.pathname) {
        case '/info/aboutUs':
            return 'О нас';
        case '/info/contact':
            return 'Контакты';
        case '/info/FAQ':
            return 'Рубрика вопрос-ответ!';
        case '/info/licagr':
            return 'Лицензионное соглашение';
        case '/info/return':
            return 'Условия возврата';
        default:
            return false;
    }
}