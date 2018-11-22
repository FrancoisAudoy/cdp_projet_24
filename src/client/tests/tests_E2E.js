import { Selector } from 'testcafe';

fixture`Créer un projet`
    .page`http://localhost/html/propProj.html`;

test('Ajout nom projet', async t => {
    await t
    .typeText('#name', 'Project 1')
    .click('#AddProjet')
    .typeText('#name', 'Project 2')
    .expect(Selector('#list_proj').innerText).contains('Project 1')
    .expect(Selector('#list_proj').innerText).contains('Project 2');
});

fixture`Lister les projets`
    .page`http://localhost/html/listProj.html`;

test('Liste projets', async t => {
    await t
        .click('#AddProjet')
        .typeText('#name', 'Project 1')
        .click('#AddProjet')
        .typeText('#name', 'Project 2')
        .expect(Selector('#list_proj').innerText).contains('Project 1')
        .expect(Selector('#list_proj').innerText).contains('Project 2');
})

fixture`Lister le backlog`
    .page`http://localhost/html/listProj.html`;

test('Affichage backlog', async t => {
    await t
        .click('#AddProjet')
        .typeText('#name', 'Sample project')
        .click('#Sample project')
        .click('#AddUserStory')
        .typeText('#description', 'a')
        .typeText('#difficulty', 'b')
        .typeText('#priority', 'c')
        .click('#submitUserStory')
        .expect(Selector('#backlog').innerText).contains('a')
        .expect(Selector('#backlog').innerText).contains('b')
        .expect(Selector('#backlog').innerText).contains('c');
    })