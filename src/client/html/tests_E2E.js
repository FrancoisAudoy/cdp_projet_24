import { Selector } from 'testcafe';

fixture `Créer un projet`
    .page `http://localhost/html/propProj.html`;

test('Ajout nom projet', async t => {
    await t
        .typeText('#name', 'Sample project')
        .click('#submit-button')
        .expect(Selector('#list_proj').innerText).contains('Sample project');
});