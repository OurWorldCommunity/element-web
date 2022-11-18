(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1484:function(n,e,t){"use strict";e.a='/*\nCopyright 2021 The Matrix.org Foundation C.I.C.\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n*/\n\n/*\n    This file is raw-imported (imported as plain text) for the export bundle, which is the reason for the .css format and the colours being hard-coded hard-coded.\n*/\n\n#snackbar {\n    display: flex;\n    visibility: hidden;\n    min-width: 250px;\n    margin-left: -125px;\n    background-color: #333;\n    color: #fff;\n    text-align: center;\n    position: fixed;\n    z-index: 1;\n    left: 50%;\n    bottom: 30px;\n    font-size: 17px;\n    padding: 6px 16px;\n    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,\n        segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,\n        sans-serif;\n    font-weight: 400;\n    line-height: 1.43;\n    border-radius: 4px;\n    letter-spacing: 0.01071em;\n}\n\n#snackbar.mx_show {\n    visibility: visible;\n    -webkit-animation: mx_snackbar_fadein 0.5s, mx_snackbar_fadeout 0.5s 2.5s;\n    animation: mx_snackbar_fadein 0.5s, mx_snackbar_fadeout 0.5s 2.5s;\n}\n\na.mx_reply_anchor {\n    cursor: pointer;\n    color: #238cf5;\n}\n\na.mx_reply_anchor:hover {\n    text-decoration: underline;\n}\n\n@-webkit-keyframes mx_snackbar_fadein {\n    from {\n        bottom: 0;\n        opacity: 0;\n    }\n    to {\n        bottom: 30px;\n        opacity: 1;\n    }\n}\n\n@keyframes mx_snackbar_fadein {\n    from {\n        bottom: 0;\n        opacity: 0;\n    }\n    to {\n        bottom: 30px;\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes mx_snackbar_fadeout {\n    from {\n        bottom: 30px;\n        opacity: 1;\n    }\n    to {\n        bottom: 0;\n        opacity: 0;\n    }\n}\n\n@keyframes mx_snackbar_fadeout {\n    from {\n        bottom: 30px;\n        opacity: 1;\n    }\n    to {\n        bottom: 0;\n        opacity: 0;\n    }\n}\n\n* {\n    scroll-behavior: smooth !important;\n}\n\n.mx_Export_EventWrapper:target {\n    background: white;\n    animation: mx_event_highlight_animation 2s linear;\n}\n\n@keyframes mx_event_highlight_animation {\n    0%,\n    100% {\n        background: white;\n    }\n    50% {\n        background: #e3e2df;\n    }\n}\n\n.mx_ReplyChain_Export {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n\n.mx_RedactedBody,\n.mx_HiddenBody {\n\n    padding-left: unset;\n}\n\nimg {\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.mx_MatrixChat {\n    max-width: 100%;\n}\n'}}]);
//# sourceMappingURL=styles.js.map