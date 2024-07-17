describe('GitHub Gists API', () => {
  const token = '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';
  const apiUrl = 'https://api.github.com/gists';
  const username = 'ptkozo';
  let gistId;

  it('Test 1 - Creating a Gist', () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: {
        Authorization: `token ${token}`
      },
      body: {
        description: "Test Gist",
        public: true,
        files: {
          "test_file.txt": {
            content: "Hello World"
          }

        }
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      gistId = response.body.id;
    });
  });

  it('Test 2 - Reading a Gist', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/${gistId}`,
      headers: {
        Authorization: `token ${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', gistId);
      expect(response.body.files).to.have.property('test_file.txt');
      expect(response.body.files['test_file.txt']).to.have.property('content', 'Hello World');
    });
  });

  it('Test 3 - Deleting a Gist', () => {
    cy.request({
      method: 'DELETE',
      url: `${apiUrl}/${gistId}`,
      headers: {
        Authorization: `token ${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it('Bonus 1 - List gists for unauthenticated user', () => {
    cy.request({
      method: 'GET',
      url: `https://api.github.com/users/${username}/gists`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
      cy.log('List of Gists:');
      response.body.forEach((gist) =>{
        cy.log(`- ${gist.description}: ${gist.html_url}`);
        cy.addContext(gist.description);
        cy.addContext(gist.html_url);
        
      });
    });
  });

  it('Bonus 2 - List Gists for authenticated user', () => {
    cy.request({
      method: 'GET',
      url: `https://api.github.com/users/${username}/gists`,
      headers: {
        Authorization: `token ${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
      cy.log('List of Gists:');
        response.body.forEach((gist) =>{
        cy.log(`- ${gist.description}: ${gist.html_url}`);
        cy.addContext(gist.description);
        cy.addContext(gist.html_url);
      });
    });
  });
});