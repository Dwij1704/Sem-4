// Write an Express JS script to only allow pdf files to be uploaded using multer middleware.
// and saves the file to a specific directory or folder called 'specific', if other than
// pdf file is uploaded then give an error message.
const express = require('express');
const multer = require('multer');
const path = require('path');
var app=