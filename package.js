Package.describe({
  name: 'gregivy:popup-confirm',
  version: '0.0.2',
  summary: 'A clean and easy to use confirmation/alert popup',
  git: 'https://github.com/gregivy/Meteor-popup-confirm.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery');
  api.use('templating');
  api.addFiles('lib/popup-confirm.html', 'client');
  api.addFiles('lib/popup-confirm.css', 'client');
  api.export('Confirmation', 'client');
  api.addFiles('lib/popup-confirm.js', 'client');
});
