function start() {
    gapi.client.init({
      'apiKey': 'AIzaSyAnA1LB6BanofUbUOG32EdsjGi71u5bl0Y',
      // Your API key will be automatically added to the Discovery Document URLs.
      'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
    }).then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.people.people.get({
        'resourceName': 'people/me',
        'requestMask.includeField': 'person.names'
      });
    }).then(function(response) {
      console.log(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };
  gapi.load('client', start);