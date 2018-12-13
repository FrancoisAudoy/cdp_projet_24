import { Selector } from 'testcafe';

fixture`Créer un projet`
    .page`http://localhost/`;

test('Ajout nom projet', async t => {
    await t
        .click('#AddProjet')
        .typeText('#nameProj', 'Project 1')
        .click('#submit-button')
        .click('#AddProjet')
        .typeText('#nameProj', 'Project 2')
        .click('#submit-button')
        .expect(Selector('#list_proj').innerText).contains('Project 1')
        .expect(Selector('#list_proj').innerText).contains('Project 2');
});

/*fixture`Lister les projets`
    .page`http://localhost/html/listProj.html`;

test('Liste projets', async t => {
    await t
        .click('#AddProjet')
        .typeText('#name', 'Project 1')
    	.click('#submit-button')
        .click('#AddProjet')
        .typeText('#name', 'Project 2')
    	.click('#submit-button')
        .expect(Selector('#list_proj').innerText).contains('Project 1')
        .expect(Selector('#list_proj').innerText).contains('Project 2');
})

fixture`Lister le backlog`
    .page`http://localhost/html/listProj.html`;

test('Affichage backlog', async t => {
    await t
        .click('#AddProjet')
        .typeText('#name', 'Sample project')
	.click('#submit-button')
        .click('#Sample project')
        .click('#AddUserStory')
        .typeText('#description', 'a')
        .typeText('#difficulty', 'b')
        .typeText('#priority', 'c')
        .click('#submitUserStoryButton')
        .expect(Selector('#backlog').innerText).contains('a')
        .expect(Selector('#backlog').innerText).contains('b')
        .expect(Selector('#backlog').innerText).contains('c');
    })
*/