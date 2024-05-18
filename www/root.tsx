import {sayHi} from "./const";
import * as rootStyle from "./css/root.scss";

// eslint-disable-next-line jest/require-hook
sayHi();

// eslint-disable-next-line jest/require-hook
console.log({...rootStyle}, rootStyle.some_class_name, rootStyle.another_class_name);
