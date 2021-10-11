describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://www.amazon.in/`);
        
        await browser.maximizeWindow();
        await $('//input[@type="text"]').setValue('watch');
        await $('//input [@id="nav-search-submit-button"]').click();
        await $('//img[@src="https://m.media-amazon.com/images/I/511fWini9RL._AC_UL320_.jpg"] [@class="s-image"]').click();
        await browser.url('https://www.amazon.in/Fossil-Analog-Brown-Dial-Watch-ME3098/dp/B01487C7CO/ref=sr_1_1_sspa?dchild=1&keywords=watch&qid=1633929561&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTzU5OUlDNk5IQ0ZXJmVuY3J5cHRlZElkPUExMDE0NzAzMU1XVlc1SzdOTzRVTSZlbmNyeXB0ZWRBZElkPUEwNjU4NTU4UzE3Q05RSE9aVFFDJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==');
        await $('//span[@class="disclaim"]');
        //await $('5000');     
        // await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

