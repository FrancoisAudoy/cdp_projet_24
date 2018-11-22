import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Créer un projet`// declare the fixture
    .page `http://localhost/html/propProj.html`;  // specify the start page


//then create a test and place your code there
test('Ajout nom projet', async t => {
    await t
        .typeText('#name', 'Sample project')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(!(Selector('#list_proj').innerText).contains('Sample project'));
});