/*
 * Main script for extracting from a site and publishing to wordpress.
 */

var request		= require('request');
var cheerio		= require('cheerio');
var wordpress	= require('wordpress');
