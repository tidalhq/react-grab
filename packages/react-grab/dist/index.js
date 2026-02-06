import {o}from'./chunk-MR2TRCRF.js';export{j as DEFAULT_THEME,g as captureElementScreenshot,f as combineBounds,n as commentPlugin,l as copyHtmlPlugin,h as copyImageToClipboard,c as formatElementInfo,e as generateSnippet,b as getStack,o as init,a as isInstrumentationActive,i as isScreenshotSupported,m as openPlugin,k as screenshotPlugin}from'./chunk-MR2TRCRF.js';/**
 * @license MIT
 *
 * Copyright (c) 2025 Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=null,R=()=>typeof window>"u"?e:window.__REACT_GRAB__??e??null,g=t=>{e=t,typeof window<"u"&&(t?window.__REACT_GRAB__=t:delete window.__REACT_GRAB__);};typeof window<"u"&&(window.__REACT_GRAB__?e=window.__REACT_GRAB__:(e=o(),window.__REACT_GRAB__=e),window.dispatchEvent(new CustomEvent("react-grab:init",{detail:e})));export{R as getGlobalApi,g as setGlobalApi};