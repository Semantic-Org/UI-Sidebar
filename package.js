var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-sidebar',
  summary : 'Semantic UI - Sidebar (official): Single component release of sidebar',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Sidebar.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
