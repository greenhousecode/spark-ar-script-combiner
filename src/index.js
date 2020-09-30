// user import to import other files
import { testVariable } from './test-import';

// use require to import Spark AR modules
const D = require('Diagnostics');

// Both Diagnostics and the test variable should be available
D.log(testVariable);
