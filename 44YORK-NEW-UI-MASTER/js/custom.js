(function(){
"use strict";
"use strict";

console.log("::LOADING 44YORK CUSTOM::");

  var app = angular.module('viewCustom', ['angularLoad']);  
  
  // Begin BrowZine - Primo Integration...
  window.browzine = {
    api: "https://public-api.thirdiron.com/public/v1/libraries/565",
    apiKey: "ba4a928c-2968-42f3-b9f8-11a8990b6914",
 
    journalCoverImagesEnabled: true,
 
    journalBrowZineWebLinkTextEnabled: true,
    journalBrowZineWebLinkText: "View Journal Contents",
 
    acticleBrowZineWebLinkTextEnabled: true,
    articleBrowZineWebLinkText: "View Issue Contents",
 
    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: "Download PDF",
 
    printRecordsIntegrationEnabled: true,
  };
 
  browzine.script = document.createElement("script");
  browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
  document.head.appendChild(browzine.script);
 
 
  app.controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    window.browzine.primo.searchResult($scope);
  });
 
  app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController'
  });
  
  
  app.component('prmPreFiltersAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPreFiltersAfterController'
  });
  
  app.controller('prmPreFiltersAfterController', [function(){
	// useful and interesting code will go here
	// but for now we'll just examine the current object.
	console.log(this);
}]);

  
// ... End BrowZine - Primo Integration

    var facss = document.createElement("link");
	facss.type = "text/css";
	facss.rel = "stylesheet";
	facss.href = "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
	document.head.appendChild(facss);
 



  /*registerModule('searchAlternatives');*/

  /*app.controller('searchAlternativeController', ['angularLoad', '$scope', '$window', '$location', function (angularLoad, $scope, $window, $location) {
    $scope.showSearchBar = true;

    this.$onInit = function () {
      try {
        // eg. query=any,contains,romeo and juliet
        //  only split to length 3 so any commas in the query are retained
        var query = this.parentCtrl.facetService.$location.$$search.query.split(",")[2];
        $scope.scholarLink = "http://scholar.google.com/scholar?hl=en&q=')" + query; // proxyLink('http://scholar.google.com/scholar?hl=en&q=') + query
        $scope.yewnoLink = "https://discover.yewno.com/?query=')" + query; // proxyLink('https://discover.yewno.com/?query=') + query
        $scope.worldcatLink = "http://www.worldcat.org/search?q=')" + query; // proxyLink('http://www.worldcat.org/search?q=') + query
      } catch (e) {
        $scope.showSearchBar = false;
        console.log(e);
        return;
      }
    };

    $scope.setUrls = function (type) {
      $scope.scholarLink = 'http://scholar.google.com/scholar';
      $scope.yewnoLink = 'https://discover.yewno.com';
      $scope.worldcatLink = 'http://www.worldcat.org';

      if ($location.$$search) {
        var query = $location.$$search.query.split(",", 3)[2];
        $scope.scholarLink += '?hl=en&q=' + query;
        $scope.yewnoLink += '?query=' + query;
        $scope.worldcatLink += '/search?q=' + query;
      }

      return true;
    };

    this.$onChanges = function () {
      console.log("Changes");
    };
  }]);

app.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'searchAlternativeController',
    template: "\n      <div class=\"default-card zero-margin _md md-primoExplore-theme searchAlternatives\">\n          <div>\n          <p>\n            <div class=class=\"try-txt\"><strong>\n              Try your search in:\n            </strong></div>\n          </p>\n          <a\n            class=\"md-raised md-button md-primoExplore-theme md-ink-ripple\"\n            href={{worldcatLink}}\n            type=\"button\"\n            ng-click='setUrls()'\n            target='_blank'\n            aria-label=\"Search WorldCat\"\n          >\n            <div class=\"worldcatLogo\" alt=\"\"></div>\n          </a>\n          <a\n            class=\"md-raised md-button md-primoExplore-theme md-ink-ripple\"\n            href={{scholarLink}}\n            target='_blank'\n            type=\"button\"\n            ng-click='setUrls()'\n            aria-label=\"Search Google Scholar\"\n          >\n            <div class=\"scholarLogo\" alt=\"\"></div>\n          </a>\n          <a\n            class=\"md-raised md-button md-primoExplore-theme md-ink-ripple\"\n            href={{yewnoLink}}\n            target='_blank'\n            type=\"button\"\n            ng-click='setUrls()'\n            aria-label=\"Search Yewno\"\n          >\n            <div class=\"yewnoLogo\" alt=\"\"></div>\n          </a>\n          </div>\n      </div>\n    "
  });
  */
  

  
    /*Custom Footer*/
/*- ### --- Primo Footer JS ---- Code Originally from NLNZ --- ### */
app.component('prmExploreFooterAfter', {
	bindings: { parentCtrl: '<' },
	template:'<div id="footerWrapper"><ul><li><div class="ftext"><span class="headline">University Library</span><p>&nbsp;</p><p>University of York, Heslington, York, YO10 5DD, UK</p><p>Tel: +44 (0)1904 323838</p><p>&nbsp;</p></div></li><li><div class="ftext"><span class="headline">Library Links</span><p>&nbsp;</p><p><a href="mailto:lib-enquiry@york.ac.uk">Contact Us</a><p><a href="http://libanswers.york.ac.uk/" target="_blank">Get Help</a></p><p><a href="http://informationbookings.york.ac.uk/booking/studies">Book a Study Room</a></p></div></li></ul><div class="line-2-copy-left"></div><div class="line-2-copy-right"></div><div class="bar"><div class="bar-wrap"><ul class="links"><li><a href="https://www.york.ac.uk/library" class="md-primoExplore-theme">Library Homepage</a>&nbsp;&nbsp;&nbsp;| </li><li><a href="https://www.york.ac.uk/about/legal-statements/" class="md-primoExplore-theme">Legal Statements</a>&nbsp;&nbsp;&nbsp;| </li><li><a href="https://www.york.ac.uk/about/legal-statements/#tab-5" class="md-primoExplore-theme">Privacy</a></li></ul><div class="logos"><span></span></a><a href="https://www.york.ac.uk/" target="_blank" class="all-govt md-primoExplore-theme"><span><img title="" src="custom/44YORK-NEW-UI-MASTER/img/library-logo.png" width="210" alt="University of York logo"></span></a></div><div class="clear"></div><div class="copyright"></div></div></div></div>'
	
});
  
  
  /*----------libchat slider-----------*/
(function () {
    var lc = document.createElement('script');lc.type = 'text/javascript';lc.async = 'true';
    lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'region-eu.libanswers.com/load_chat.php?hash=cf1799572b0b3157a8ee72471190c327';
    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(lc, s);
})();
/*---------------libchat slider ends ---------------*/

console.log("::FINISHED LOADING 44YORK CUSTOM::");

// Generate a module consisting of all defined modules
//angular.module('viewCustom', moduleList);
  
})();


/*- ########## ---------- Non AngularJS code ---------- ########## */
/*- ########## ----------Footer, code courtesy of EL/NLNZ - measure page once "is sticky" is put in and (try) to put footer after results ---------- ########## */

// Instantiate variables that will be reset repeatedly in the listener function
var max = 0;
var winHeight = 0;
var scrollTop = 0;
var foot = 0;
// and let's have a small buffer before the footerWrapper
var buffer = 50;

window.addEventListener('scroll', function(e) {
  // Total length of document
  max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,
                     document.body.offsetHeight, document.documentElement.offsetHeight,
                     document.body.clientHeight, document.documentElement.clientHeight);
  // Height of window
  winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight
  // Point of the top of the document visible on screen
  scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  // Height of footer
  foot = Math.round(parseFloat(window.getComputedStyle(document.getElementById('footerWrapper')).height));
  // check where we are in terms of scrolling and the footer
  if (scrollTop + winHeight >= max - foot) {
    document.querySelectorAll('.primo-scrollbar, .is-stuck')[0].style.maxHeight = 'calc(100% - ' + Math.abs(max - winHeight - scrollTop - foot - buffer)  + 'px)'
  } else {
    document.querySelectorAll('.primo-scrollbar, .is-stuck')[0].style.maxHeight = 'calc(100% - 2em)'
  }
});
