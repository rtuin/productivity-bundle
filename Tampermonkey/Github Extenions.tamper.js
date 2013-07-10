// ==UserScript==
// @name       Github Extenions
// @namespace  http://www.rtuin.nl/
// @version    0.1
// @description An extension to the original GitHub.com interface
// @match      https://github.com/*
// @copyright  Creative Commons Attribution-ShareAlike 3.0 Unported License, 2013, Richard Tuin
// ==/UserScript==

$('#diff .file').each(function () {
    var $this = $(this);
    var file = $this.find('.info span:nth-child(2)').text().trim();
	var element = $('<a href="#" class="minibutton">Copy path</a>');
    element.click(function(event) {
        prompt("Press ⌘+C to copy the filepath", file);
        event.preventDefault();
    });
    $this.find('.actions .button-group').append(element);
});

var githubUsername = $('#user-links .name').text().trim();
var currentRepo = $('.js-current-repository').text().trim();
$('.pagehead-actions').append('<li><a href="/'+githubUsername+'/'+currentRepo+'" class="minibutton js-toggler-target fork-button lighter upwards" title="Go to your own fork of this repo (if you have one)" rel="facebox nofollow"><span class="text">My fork</span></a></li>');
