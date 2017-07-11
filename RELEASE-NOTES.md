### Version 2.2.11 - July 11, 2017

- **Icon** - Changed `content icon` to use an existing alias `sidebar icon`, as it is most common use case and prevents naming collisions with `content` of elements **Thanks @philrykoff** [#4574](https://github.com/Semantic-Org/Semantic-UI/issues/4574)
- **Sidebar** - Removed use of `ios` browser detection, and use of `-webkit-overflow-scrolling: touch;`. iOS no longer has sizing issues when displaying sidebar content in latest iOS.

#### Dropdown

- **Sidebar** - Fixed bug where sidebar in `iOS` would show incorrect background when opening sidebar if page is less than 100% height [#4264](https://github.com/Semantic-Org/Semantic-UI/pull/4264)

### Version 2.1.7 - Dec 19, 2015

- **Sidebar** - Fixed css rule issue causing `very thin` sidebar to not work [#3300](https://github.com/Semantic-Org/Semantic-UI/issues/3300)
- **Sidebar** - Sidebar no longer includes `transform` rules on child elements, this was causing layout issues in some cases (for example dropdowns in sidebars) [#3306](https://github.com/Semantic-Org/Semantic-UI/issues/3306)

### Version 2.0.4 - July 17, 2015

- **Sidebar** - `right`, `top`, and `bottom` sidebar will not have their direction removed on `destroy` [#2644](https://github.com/Semantic-Org/Semantic-UI/issues/2644)
- Partial rewrite of sidebar documentation

### Version 2.0.0 - June 30, 2015

- **Sidebar** - iOS will now correctly report `scrollTop` values for `document` or `body` when using a sidebar. Chrome on iOS no longer has issues with fixed content not sticking immediately when using a sidebar.
- **Sidebar** - Improved animation performance through performance debugging. Sidebar now caches, width, height, rtl direction on load.
- **Modal** - Modal with `detachable: false` inside `ui sidebar`  `pusher` element will now show correctly
- **Sidebar** - Top/Bottom sidebar will now show scroll bars correctly when taller than 100% page height
- **Sidebar** - Fixed bug where having a `style[title]` in page causing page not to be pushed correctly
- **Sidebar** - Last menu item now has a border when sidebar and menu are used together
- **Sidebar** - Sidebar `legacy` animations have been removed. 3D transforms are now available in all supported browsers.

### Version 1.10.0 - February 23, 2015

- **Sidebar** - Sidebar using `exclusive: true` now queue animations after hiding previous sidebar (unless `overlay`) to avoid rendering issues

### UI Changes

- **Sidebar** - Sidebars in IE now work correctly with `context` specified

### Version 1.8.0 - January 23, 2015

- **Sidebar** - Fixed bug with `pusher` inheriting first child margins due to `margin-collapse`
- **Sidebar** - Mobile `is mobile` was using RegExp `test()` which would return an incorrect value when called multiple times
- **Sidebar** - Sidebar will now only close if you click on `pusher` or underlayed `body` (scale out). Clicking on fixed elements will not close sidebar.

### Version 1.7.(1-2) - January 15, 2015

- **UI** - Fixes `progress`, `ad`, and `sidebar` not loading `.override` files correctly

### Version 1.7.0 - January 14, 2015

- **Sidebar** - Having a sidebar visible on page load is now much simpler. You can include ``ui visible sidebar`` on page load to have a sidebar element appear on page load. To close call `$('.ui.sidebar').sidebar('hide')`
- **Sidebar** - Added documentation on using sidebar on a custom context. Sidebars using a custom context no longer add background colors like those initialized on `body`
- **Sidebar** - `setup layout` not occurs synchronously if you initialize a sidebar without the proper html. This makes sure calls to sidebar will occur correctly before the page is setup. A new setting `delaySetup` will override this, increasing performance.

### Version 1.5.2 - January 02, 2015

- **Sidebar** - Fix bug with `useLegacy` introduced in `1.5.1`

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