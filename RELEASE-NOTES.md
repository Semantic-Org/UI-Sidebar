### Version 1.3.0 - December 17, 2014

- **Sidebar** - Mobile sidebars now only set ``overflow`` on page's ``html`` when browsing from ``iOS`` devices. Using overflow caused issues with page's scroll being lost when resizing a browser to mobile widths. This also affected modules that used  `$(window).scrollTop()`` at mobile screen sizes

### Version 1.2.0 - December 08, 2014

- **Sidebar** - Now has behaviors ``is open/closed`` that are aliases for ``is visible/hidden``
- **Sidebar** - Fixes issue with multiple sidebars sometimes causing dimmer to close prematurely
- **Sidebar** - Dimmer can now be clicked even before sidebar has finished showing to immediately close sidebar

### Version 1.1.1 - December 03, 2014

- **Sidebar** - Fixes issue that may cause sidebars to stay open in some circumstances when using multiple sidebars

### Version 1.0.0 - November 24, 2014

- **Sidebar** - Sidebar now has tall / very tall variations for resizing top/bottom sidebars

### Version 0.12.0 - Jan 06, 2014

- **Sidebar** - Fixes issue where top sidebar was receiving left offset

### Version 0.9.4 - Nov 24, 2013

- **Sidebar** - Fixes right sidebars to correctly allow for sizing (Thanks DveMac)
- **Sidebar** - Typo in sidebar header (Thanks slobo)

### Version 0.7.0 - Oct 22, 2013

- **Sidebar** - Sidebar will now default to being exclusive and hiding other sidebars on show
- **Sidebar** - Sidebar now has onChange, onShow, onHide callbacks
- **Sidebar** - Sidebar now have several size variations, and a new styled variation that comes preformatted
- **Sidebar** - Floating sidebar is slightly less heavily shadowed

### Version 0.1.0 - Sep 25, 2013

- Updated documentation for sidebar, transition, and form validation