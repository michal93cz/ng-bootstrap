<a name="1.0.0-alpha.6"></a>
# [1.0.0-alpha.6](https://github.com/ng-bootstrap/ng-bootstrap/compare/1.0.0-alpha.5...1.0.0-alpha.6) (2016-09-23)


### Bug Fixes

* **accordion:** rename change event to avoid conflicts ([21eb610](https://github.com/ng-bootstrap/ng-bootstrap/commit/21eb610)), closes [#751](https://github.com/ng-bootstrap/ng-bootstrap/issues/751) [#756](https://github.com/ng-bootstrap/ng-bootstrap/issues/756)
* **dropdown:** support autoClose when several dropdowns exist ([e2e7c1b](https://github.com/ng-bootstrap/ng-bootstrap/commit/e2e7c1b)), closes [#687](https://github.com/ng-bootstrap/ng-bootstrap/issues/687) [#785](https://github.com/ng-bootstrap/ng-bootstrap/issues/785)
* **popover:** avoid shadowing of the native title property ([2577efd](https://github.com/ng-bootstrap/ng-bootstrap/commit/2577efd)), closes [#736](https://github.com/ng-bootstrap/ng-bootstrap/issues/736) [#757](https://github.com/ng-bootstrap/ng-bootstrap/issues/757)
* **popover:** properly handle components using OnPush strategy ([40bde5e](https://github.com/ng-bootstrap/ng-bootstrap/commit/40bde5e)), closes [#781](https://github.com/ng-bootstrap/ng-bootstrap/issues/781)
* **tabset:** rename change event to avoid conflicts with native ones ([9d2754f](https://github.com/ng-bootstrap/ng-bootstrap/commit/9d2754f)), closes [#741](https://github.com/ng-bootstrap/ng-bootstrap/issues/741) [#747](https://github.com/ng-bootstrap/ng-bootstrap/issues/747)
* **tooltip:** hide, or avoid opening the tooltip if its value is falsy ([31a035b](https://github.com/ng-bootstrap/ng-bootstrap/commit/31a035b)), closes [#737](https://github.com/ng-bootstrap/ng-bootstrap/issues/737) [#745](https://github.com/ng-bootstrap/ng-bootstrap/issues/745)
* **tooltip:** properly handle components using OnPush strategy ([667833c](https://github.com/ng-bootstrap/ng-bootstrap/commit/667833c)), closes [#772](https://github.com/ng-bootstrap/ng-bootstrap/issues/772) [#777](https://github.com/ng-bootstrap/ng-bootstrap/issues/777)
* **typeahead:** properly handle components using OnPush strategy ([a2ba68a](https://github.com/ng-bootstrap/ng-bootstrap/commit/a2ba68a)), closes [#775](https://github.com/ng-bootstrap/ng-bootstrap/issues/775)


### Features

* **alert:** remove self-closing alert component ([79e393d](https://github.com/ng-bootstrap/ng-bootstrap/commit/79e393d)), closes [#758](https://github.com/ng-bootstrap/ng-bootstrap/issues/758)
* **datepicker:** allow parsing and formatting dates in a custom way ([401fcfa](https://github.com/ng-bootstrap/ng-bootstrap/commit/401fcfa)), closes [#755](https://github.com/ng-bootstrap/ng-bootstrap/issues/755)
* **typeahead:** add support for the "editable" option ([cb91905](https://github.com/ng-bootstrap/ng-bootstrap/commit/cb91905)), closes [#788](https://github.com/ng-bootstrap/ng-bootstrap/issues/788) [#789](https://github.com/ng-bootstrap/ng-bootstrap/issues/789)


### BREAKING CHANGES

* alert: the `NgbSelfClosingAlert` component has been removed.
Check the self-closing alert demo to know how to achieve the same thing with `NgbAlert`.
* accordion: the `change` event on the accordion level was renamed to `panelChange`.
Before:

`<ngb-accordion (change)="...">`

after:

`<ngb-accordion (panelChange)="...">`

* popover: the title property of the popover directive was renamed to popoverTitle.
Before:

`<div ngbPopover="..." title="...">`

after:

`<div ngbPopover="..." popoverTitle="...">`

* tabset: the `change` event on the tabset level was renamed to `tabChange`.
Before:

`<ngb-tabset (change)="...">`

after:

`<ngb-tabset (tabChange)="...">`



<a name="1.0.0-alpha.5"></a>
# [1.0.0-alpha.5](https://github.com/ng-bootstrap/ng-bootstrap/compare/1.0.0-alpha.4...1.0.0-alpha.5) (2016-09-15)

This release brings support for datepicker in popups - we believe that there is a solid widget here!
Alpha.5 changes content of npm package to enable AoT compilation with tree-shaking.   
There are also small features and bug fixes for the existing widgets - see the details below.


### Bug Fixes

* **popover:** properly re-position popovers ([a729ba9](https://github.com/ng-bootstrap/ng-bootstrap/commit/a729ba9)), closes [#710](https://github.com/ng-bootstrap/ng-bootstrap/issues/710)
* **tooltip:** properly re-position tooltips ([6748a78](https://github.com/ng-bootstrap/ng-bootstrap/commit/6748a78)), closes [#709](https://github.com/ng-bootstrap/ng-bootstrap/issues/709)
* **typeahead:** properly re-position typeahead window ([2f59666](https://github.com/ng-bootstrap/ng-bootstrap/commit/2f59666)), closes [#707](https://github.com/ng-bootstrap/ng-bootstrap/issues/707) [#714](https://github.com/ng-bootstrap/ng-bootstrap/issues/714)
* **typeahead:** properly support disabled inputs ([bf61640](https://github.com/ng-bootstrap/ng-bootstrap/commit/bf61640)), closes [#703](https://github.com/ng-bootstrap/ng-bootstrap/issues/703)


### Features

* **datepicker:** add support for datepickers in popups ([390935b](https://github.com/ng-bootstrap/ng-bootstrap/commit/390935b)), closes [#715](https://github.com/ng-bootstrap/ng-bootstrap/issues/715)
* **datepicker:** add background color when hovering day ([bc89510](https://github.com/ng-bootstrap/ng-bootstrap/commit/bc89510)), closes [#713](https://github.com/ng-bootstrap/ng-bootstrap/issues/713)
* **datepicker:** add support for disabled datepicker ([64ec99c](https://github.com/ng-bootstrap/ng-bootstrap/commit/64ec99c)), closes [#702](https://github.com/ng-bootstrap/ng-bootstrap/issues/702)
* **timepicker:** propagate second as 0 if seconds not displayed ([c1c68b0](https://github.com/ng-bootstrap/ng-bootstrap/commit/c1c68b0)), closes [#711](https://github.com/ng-bootstrap/ng-bootstrap/issues/711)
* **typeahead:** add config service to provide default values ([237b4d5](https://github.com/ng-bootstrap/ng-bootstrap/commit/237b4d5)), closes [#518](https://github.com/ng-bootstrap/ng-bootstrap/issues/518) [#697](https://github.com/ng-bootstrap/ng-bootstrap/issues/697)
* **typeahead:** allow veto of an item selection ([e793944](https://github.com/ng-bootstrap/ng-bootstrap/commit/e793944)), closes [#699](https://github.com/ng-bootstrap/ng-bootstrap/issues/699) [#733](https://github.com/ng-bootstrap/ng-bootstrap/issues/733)


### BREAKING CHANGES

* typeahead: payload of the typeahead's `selectItem` event was changed - now it is
an object implementing the `NgbTypeaheadSelectItemEvent`. You can easily migrate your existing
code by changing:

`<input [ngbTypeahead]="find" (selectItem)="onSelect($event)"/>`

to

`<input [ngbTypeahead]="find" (selectItem)="onSelect($event.item)"/>`

* build: npm package: code in ESM (ES6 Modules) format is now published at the default location in the npm package with `package.json`'s `main` entry pointing to an UMD bundle (primarily for node and webpack 1 users).

If you are using SystemJS, you should adjust your configuration to point to the UMD bundle.



<a name="1.0.0-alpha.4"></a>
# [1.0.0-alpha.4](https://github.com/ng-bootstrap/ng-bootstrap/compare/1.0.0-alpha.3...1.0.0-alpha.4) (2016-09-07)

This release brings a new component - datepicker! Additionally all widgets now support global config through an injectable service.  
There are also small features and bug fixes for the existing widgets - see the details below.

### Bug Fixes

* **dropdown:** don't emit duplicate change events ([2e529e3](https://github.com/ng-bootstrap/ng-bootstrap/commit/2e529e3)), closes [#694](https://github.com/ng-bootstrap/ng-bootstrap/issues/694) [#695](https://github.com/ng-bootstrap/ng-bootstrap/issues/695)
* **timepicker:** spinners don't submit form anymore ([f131990](https://github.com/ng-bootstrap/ng-bootstrap/commit/f131990)), closes [#690](https://github.com/ng-bootstrap/ng-bootstrap/issues/690) [#691](https://github.com/ng-bootstrap/ng-bootstrap/issues/691)
* **typeahead:** navigation buttons don't submit form anymore ([79f4597](https://github.com/ng-bootstrap/ng-bootstrap/commit/79f4597)), closes [#693](https://github.com/ng-bootstrap/ng-bootstrap/issues/693)


### Features

* **accordion:** add config service to provide default values ([1c290a2](https://github.com/ng-bootstrap/ng-bootstrap/commit/1c290a2)), closes [#655](https://github.com/ng-bootstrap/ng-bootstrap/issues/655)
* **alert:** add config service to provide default values ([e666c61](https://github.com/ng-bootstrap/ng-bootstrap/commit/e666c61)), closes [#661](https://github.com/ng-bootstrap/ng-bootstrap/issues/661)
* **alert:** self-closing alerts are non-dismissible by default ([720c409](https://github.com/ng-bootstrap/ng-bootstrap/commit/720c409)), closes [#660](https://github.com/ng-bootstrap/ng-bootstrap/issues/660) [#676](https://github.com/ng-bootstrap/ng-bootstrap/issues/676)
* **carousel:** add config service to provide default values ([99d4386](https://github.com/ng-bootstrap/ng-bootstrap/commit/99d4386)), closes [#664](https://github.com/ng-bootstrap/ng-bootstrap/issues/664)
* **datepicker:** add config service to provide default values ([42002d9](https://github.com/ng-bootstrap/ng-bootstrap/commit/42002d9)), closes [#677](https://github.com/ng-bootstrap/ng-bootstrap/issues/677)
* **datepicker:** initial version of datepicker component ([#618](https://github.com/ng-bootstrap/ng-bootstrap/issues/618)) ([9e8c5c0](https://github.com/ng-bootstrap/ng-bootstrap/commit/9e8c5c0)), closes [#20](https://github.com/ng-bootstrap/ng-bootstrap/issues/20)
* **dropdown:** add config service to provide default values ([e97d260](https://github.com/ng-bootstrap/ng-bootstrap/commit/e97d260)), closes [#688](https://github.com/ng-bootstrap/ng-bootstrap/issues/688)
* **dropdown:** add support for dropup ([56b8dc5](https://github.com/ng-bootstrap/ng-bootstrap/commit/56b8dc5)), closes [#667](https://github.com/ng-bootstrap/ng-bootstrap/issues/667)
* **pagination:** add config service to provide default values ([#665](https://github.com/ng-bootstrap/ng-bootstrap/issues/665)) ([9405e0e](https://github.com/ng-bootstrap/ng-bootstrap/commit/9405e0e))
* **popover:** add config service to provide default values ([a58588c](https://github.com/ng-bootstrap/ng-bootstrap/commit/a58588c)), closes [#686](https://github.com/ng-bootstrap/ng-bootstrap/issues/686)
* **progressbar:** add config service to provide default values ([f32f8c8](https://github.com/ng-bootstrap/ng-bootstrap/commit/f32f8c8))
* **rating:** add config service to provide default values ([8b7047d](https://github.com/ng-bootstrap/ng-bootstrap/commit/8b7047d)), closes [#671](https://github.com/ng-bootstrap/ng-bootstrap/issues/671)
* **tabset:** add config service to provide default values ([609cbde](https://github.com/ng-bootstrap/ng-bootstrap/commit/609cbde)), closes [#673](https://github.com/ng-bootstrap/ng-bootstrap/issues/673)
* **timepicker:** add config service to provide default values ([ca40f27](https://github.com/ng-bootstrap/ng-bootstrap/commit/ca40f27)), closes [#674](https://github.com/ng-bootstrap/ng-bootstrap/issues/674)
* **tooltip:** add config service to provide default values ([7107caf](https://github.com/ng-bootstrap/ng-bootstrap/commit/7107caf)), closes [#678](https://github.com/ng-bootstrap/ng-bootstrap/issues/678)
* **typeahead:** add support for the showHint option ([5a0226d](https://github.com/ng-bootstrap/ng-bootstrap/commit/5a0226d)), closes [#639](https://github.com/ng-bootstrap/ng-bootstrap/issues/639) [#640](https://github.com/ng-bootstrap/ng-bootstrap/issues/640)



<a name="1.0.0-alpha.3"></a>
# [1.0.0-alpha.3](https://github.com/ng-bootstrap/ng-bootstrap/compare/1.0.0-alpha.2...1.0.0-alpha.3) (2016-08-30)

This release adds support for the modal service. Cross-browser compatibility was reviewed and improved. We now support all the browsers supported by Angular 2 and Bootstrap, including IE9.
There are also small features and bug fixes for the existing widgets - see the details below. 

### Bug Fixes

* **typeahead:** cleans up subscription on component destroy ([5dcecae](https://github.com/ng-bootstrap/ng-bootstrap/commit/5dcecae)), closes [#620](https://github.com/ng-bootstrap/ng-bootstrap/issues/620)
* fix the error emitted by TS due to missing generic type ([976ff34](https://github.com/ng-bootstrap/ng-bootstrap/commit/976ff34)), closes [#622](https://github.com/ng-bootstrap/ng-bootstrap/issues/622)

### Features

* support IE9 ([5514a97](https://github.com/ng-bootstrap/ng-bootstrap/commit/5514a97)), closes [#604](https://github.com/ng-bootstrap/ng-bootstrap/issues/604)
* **modal:** add initial version of the modal service ([3ef99c5](https://github.com/ng-bootstrap/ng-bootstrap/commit/3ef99c5)), closes [#3](https://github.com/ng-bootstrap/ng-bootstrap/issues/3)
* **typeahead:** add support for the 'select' output ([c0dd7b7](https://github.com/ng-bootstrap/ng-bootstrap/commit/c0dd7b7)), closes [#606](https://github.com/ng-bootstrap/ng-bootstrap/issues/606) [#610](https://github.com/ng-bootstrap/ng-bootstrap/issues/610)



<a name="1.0.0-alpha.2"></a>
# [1.0.0-alpha.2](https://github.com/ng-bootstrap/ng-bootstrap/compare/1.0.0-alpha.1...1.0.0-alpha.2) (2016-08-10)

This release makes the code compatible with Angular 2.0.0-rc.5.  
There are also small features and bug fixes for the existing widgets - see the details below.

### Bug Fixes

* **buttons:** don't interfere with 'active' class ([af4de2a](https://github.com/ng-bootstrap/ng-bootstrap/commit/af4de2a)), closes [#557](https://github.com/ng-bootstrap/ng-bootstrap/issues/557) [#559](https://github.com/ng-bootstrap/ng-bootstrap/issues/559)
* **progressbar:** reorder 'value' and 'max' attribute bindings for IE ([30e20f5](https://github.com/ng-bootstrap/ng-bootstrap/commit/30e20f5)), closes [#543](https://github.com/ng-bootstrap/ng-bootstrap/issues/543) [#544](https://github.com/ng-bootstrap/ng-bootstrap/issues/544)
* **timepicker:** format input values on blur ([d9ac911](https://github.com/ng-bootstrap/ng-bootstrap/commit/d9ac911)), closes [#511](https://github.com/ng-bootstrap/ng-bootstrap/issues/511) [#517](https://github.com/ng-bootstrap/ng-bootstrap/issues/517)
* **timepicker:** propagate only valid model values ([8c4144a](https://github.com/ng-bootstrap/ng-bootstrap/commit/8c4144a)), closes [#513](https://github.com/ng-bootstrap/ng-bootstrap/issues/513) [#516](https://github.com/ng-bootstrap/ng-bootstrap/issues/516)
* **typeahead:** resolves window items excessive rendering ([862fbc5](https://github.com/ng-bootstrap/ng-bootstrap/commit/862fbc5)), closes [#526](https://github.com/ng-bootstrap/ng-bootstrap/issues/526)
* **typeahead:** specify any type for formatters argument ([86c3644](https://github.com/ng-bootstrap/ng-bootstrap/commit/86c3644)), closes [#553](https://github.com/ng-bootstrap/ng-bootstrap/issues/553) [#554](https://github.com/ng-bootstrap/ng-bootstrap/issues/554)
* don't accept string as boolean input ([190b7ec](https://github.com/ng-bootstrap/ng-bootstrap/commit/190b7ec)), closes [#552](https://github.com/ng-bootstrap/ng-bootstrap/issues/552)
* don't accept string as number input ([f49fb08](https://github.com/ng-bootstrap/ng-bootstrap/commit/f49fb08)), closes [#560](https://github.com/ng-bootstrap/ng-bootstrap/issues/560)

### Features

* **timepicker:** allow hiding the spinners ([dc4962d](https://github.com/ng-bootstrap/ng-bootstrap/commit/dc4962d)), closes [#510](https://github.com/ng-bootstrap/ng-bootstrap/issues/510) [#519](https://github.com/ng-bootstrap/ng-bootstrap/issues/519)
* **typeahead:** set autocomplete, autocapitalize and autocorrect off ([46024c3](https://github.com/ng-bootstrap/ng-bootstrap/commit/46024c3)), closes [#520](https://github.com/ng-bootstrap/ng-bootstrap/issues/520) [#525](https://github.com/ng-bootstrap/ng-bootstrap/issues/525)


### BREAKING CHANGES

* number inputs in pagination could previously be set as strings. The values passed were transformed to numbers if necessary and rounded to integers. This is not supported anymore. All number inputs should now consistently be set as number, using the syntax `[attr]="value"` (for example: `<ngb-pagination [pageSize]="20" ...></ngb-pagination>` instead of `<ngb-pagination pageSize="20" ...></ngb-pagination>`), and rounding is not applied anymore.
* boolean inputs in progressbar and pagination could be set by just adding the attribute
(for example: `<ngb-progressbar striped></ngb-progressbar>`). This is not supported anymore.
All boolean inputs must now consistently be set using the syntax `[attr]="value"`
(for example: `<ngb-progressbar [striped]="true"></ngb-progressbar>`).
* you need to use `@NgModule`s to setup your application. Check https://ng-bootstrap.github.io/#/getting-started for more details.



<a name="1.0.0-alpha.1"></a>
# [1.0.0-alpha.1](https://github.com/ng-bootstrap/ng-bootstrap/compare/1.0.0-alpha.0...1.0.0-alpha.1) (2016-07-29)

This release adds support for 2 new directives ([timepicker](https://ng-bootstrap.github.io/#/components/timepicker) and [typeahead](https://ng-bootstrap.github.io/#/components/typeahead)) and updates Bootstrap support to 4.0.0-alpha.3.
There are also small features and bug fixes for the existing widgets - see the details below.

### Bug Fixes

* **dropdown:** use button elements instead of links ([aeeee01](https://github.com/ng-bootstrap/ng-bootstrap/commit/aeeee01)), closes [#490](https://github.com/ng-bootstrap/ng-bootstrap/issues/490)
* **pagination:** display proper cursor on each page ([dca96fd](https://github.com/ng-bootstrap/ng-bootstrap/commit/dca96fd)), closes [#492](https://github.com/ng-bootstrap/ng-bootstrap/issues/492)
* **progressbar:** don't add bogus CSS classes ([56ea4c5](https://github.com/ng-bootstrap/ng-bootstrap/commit/56ea4c5)), closes [#496](https://github.com/ng-bootstrap/ng-bootstrap/issues/496)
* **rating:** set cursor on stars of rating component ([#411](https://github.com/ng-bootstrap/ng-bootstrap/issues/411)) ([bcba259](https://github.com/ng-bootstrap/ng-bootstrap/commit/bcba259))


### Features

* **accordion:** add panels type option ([b5ad117](https://github.com/ng-bootstrap/ng-bootstrap/commit/b5ad117)), closes [#420](https://github.com/ng-bootstrap/ng-bootstrap/issues/420) [#431](https://github.com/ng-bootstrap/ng-bootstrap/issues/431)
* **timepicker:** add timepicker widget
* **typeahead:** add typeahead widget

### BREAKING CHANGES

* **accordion:** accordion implementation was overhauled to use cards instead of deprecated panels. Refer to the API docs and [demo page](https://ng-bootstrap.github.io/#/components/accordion) for more details.  
* **pager:** support for the pager widget was removed as the result of its removal from Bootstrap's CSS.  


<a name="1.0.0-alpha.0"></a>
# [1.0.0-alpha.0](https://github.com/ng-bootstrap/ng-bootstrap/compare/9f8f37b...1.0.0-alpha.0) (2016-07-08)

### Features

Initial release with the following directives:

* accordion
* alert
* buttons
* carousel
* collapse
* dropdown
* pager
* pagination
* popover
* progressbar
* rating
* tabset
* tooltip