/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/context/UserContext.tsx":
/*!*************************************!*\
  !*** ./lib/context/UserContext.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider),\n/* harmony export */   useUser: () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/firebase */ \"./lib/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n // Make sure these are your correct imports\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: null,\n    userData: null,\n    loading: true\n});\nconst UserProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProvider.useEffect\": ()=>{\n            const unsubscribeAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_lib_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, {\n                \"UserProvider.useEffect.unsubscribeAuth\": async (currentUser)=>{\n                    if (!currentUser) {\n                        // User is logged out\n                        setUser(null);\n                        setUserData(null);\n                        setLoading(false);\n                        return;\n                    }\n                    // User is logged in\n                    setUser(currentUser);\n                    const userDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_4__.db, 'users', currentUser.uid);\n                    const unsubscribeUser = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(userDoc, {\n                        \"UserProvider.useEffect.unsubscribeAuth.unsubscribeUser\": (snapshot)=>{\n                            if (snapshot.exists()) {\n                                setUserData(snapshot.data() || {});\n                            } else {\n                                // If the user doc doesn't exist or was deleted\n                                setUserData(null);\n                            }\n                            setLoading(false);\n                        }\n                    }[\"UserProvider.useEffect.unsubscribeAuth.unsubscribeUser\"], {\n                        \"UserProvider.useEffect.unsubscribeAuth.unsubscribeUser\": (error)=>{\n                            console.error('Error listening to user doc:', error);\n                            setUserData({});\n                            setLoading(false);\n                        }\n                    }[\"UserProvider.useEffect.unsubscribeAuth.unsubscribeUser\"]);\n                    // Cleanup user snapshot listener when user logs out or component unmounts\n                    return ({\n                        \"UserProvider.useEffect.unsubscribeAuth\": ()=>unsubscribeUser()\n                    })[\"UserProvider.useEffect.unsubscribeAuth\"];\n                }\n            }[\"UserProvider.useEffect.unsubscribeAuth\"]);\n            // Cleanup the auth state listener on unmount\n            return ({\n                \"UserProvider.useEffect\": ()=>unsubscribeAuth()\n            })[\"UserProvider.useEffect\"];\n        }\n    }[\"UserProvider.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            userData,\n            loading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tobe/testh2/h2dev/lib/context/UserContext.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\nconst useUser = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29udGV4dC9Vc2VyQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUNwQjtBQUNFO0FBQ1gsQ0FBQywyQ0FBMkM7QUFRckYsTUFBTVMsNEJBQWNULG9EQUFhQSxDQUFrQjtJQUNqRFUsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLFNBQVM7QUFDWDtBQUVPLE1BQU1DLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQWlDO0lBQ3RFLE1BQU0sQ0FBQ0osTUFBTUssUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBTTtJQUN0QyxNQUFNLENBQUNRLFVBQVVLLFlBQVksR0FBR2IsK0NBQVFBLENBQU07SUFDOUMsTUFBTSxDQUFDUyxTQUFTSyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0E7a0NBQUM7WUFDUixNQUFNZ0Isa0JBQWtCZCxpRUFBa0JBLENBQUNHLCtDQUFJQTswREFBRSxPQUFPWTtvQkFDdEQsSUFBSSxDQUFDQSxhQUFhO3dCQUNoQixxQkFBcUI7d0JBQ3JCSixRQUFRO3dCQUNSQyxZQUFZO3dCQUNaQyxXQUFXO3dCQUNYO29CQUNGO29CQUVBLG9CQUFvQjtvQkFDcEJGLFFBQVFJO29CQUNSLE1BQU1DLFVBQVVmLHVEQUFHQSxDQUFDRyw2Q0FBRUEsRUFBRSxTQUFTVyxZQUFZRSxHQUFHO29CQUVoRCxNQUFNQyxrQkFBa0JoQiw4REFBVUEsQ0FDaENjO2tGQUNBLENBQUNHOzRCQUNDLElBQUlBLFNBQVNDLE1BQU0sSUFBSTtnQ0FDckJSLFlBQVlPLFNBQVNFLElBQUksTUFBTSxDQUFDOzRCQUNsQyxPQUFPO2dDQUNMLCtDQUErQztnQ0FDL0NULFlBQVk7NEJBQ2Q7NEJBQ0FDLFdBQVc7d0JBQ2I7O2tGQUNBLENBQUNTOzRCQUNDQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTs0QkFDOUNWLFlBQVksQ0FBQzs0QkFDYkMsV0FBVzt3QkFDYjs7b0JBR0YsMEVBQTBFO29CQUMxRTtrRUFBTyxJQUFNSzs7Z0JBQ2Y7O1lBRUEsNkNBQTZDO1lBQzdDOzBDQUFPLElBQU1KOztRQUNmO2lDQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1QsWUFBWW1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFbkI7WUFBTUM7WUFBVUM7UUFBUTtrQkFDcERFOzs7Ozs7QUFHUCxFQUFDO0FBRU0sTUFBTWdCLFVBQVUsSUFBTTdCLGlEQUFVQSxDQUFDUSxhQUFZIiwic291cmNlcyI6WyIvVXNlcnMvdG9iZS90ZXN0aDIvaDJkZXYvbGliL2NvbnRleHQvVXNlckNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5pbXBvcnQgeyBkb2MsIG9uU25hcHNob3QgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJ0AvbGliL2ZpcmViYXNlJyAvLyBNYWtlIHN1cmUgdGhlc2UgYXJlIHlvdXIgY29ycmVjdCBpbXBvcnRzXG5cbmludGVyZmFjZSBVc2VyQ29udGV4dFR5cGUge1xuICB1c2VyOiBhbnk7IC8vIEFkanVzdCB0aGUgdHlwZSBhcyBuZWVkZWRcbiAgdXNlckRhdGE6IGFueTsgLy8gQWRqdXN0IHRoZSB0eXBlIGFzIG5lZWRlZFxuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VXNlckNvbnRleHRUeXBlPih7XG4gIHVzZXI6IG51bGwsXG4gIHVzZXJEYXRhOiBudWxsLFxuICBsb2FkaW5nOiB0cnVlLFxufSlcblxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPGFueT4obnVsbClcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZUF1dGggPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgYXN5bmMgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIG91dFxuICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgIHNldFVzZXJEYXRhKG51bGwpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBVc2VyIGlzIGxvZ2dlZCBpblxuICAgICAgc2V0VXNlcihjdXJyZW50VXNlcilcbiAgICAgIGNvbnN0IHVzZXJEb2MgPSBkb2MoZGIsICd1c2VycycsIGN1cnJlbnRVc2VyLnVpZClcblxuICAgICAgY29uc3QgdW5zdWJzY3JpYmVVc2VyID0gb25TbmFwc2hvdChcbiAgICAgICAgdXNlckRvYyxcbiAgICAgICAgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7XG4gICAgICAgICAgICBzZXRVc2VyRGF0YShzbmFwc2hvdC5kYXRhKCkgfHwge30pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGRvYyBkb2Vzbid0IGV4aXN0IG9yIHdhcyBkZWxldGVkXG4gICAgICAgICAgICBzZXRVc2VyRGF0YShudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsaXN0ZW5pbmcgdG8gdXNlciBkb2M6JywgZXJyb3IpXG4gICAgICAgICAgc2V0VXNlckRhdGEoe30pXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICAvLyBDbGVhbnVwIHVzZXIgc25hcHNob3QgbGlzdGVuZXIgd2hlbiB1c2VyIGxvZ3Mgb3V0IG9yIGNvbXBvbmVudCB1bm1vdW50c1xuICAgICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlVXNlcigpXG4gICAgfSlcblxuICAgIC8vIENsZWFudXAgdGhlIGF1dGggc3RhdGUgbGlzdGVuZXIgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZUF1dGgoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCB1c2VyRGF0YSwgbG9hZGluZyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCkgPT4gdXNlQ29udGV4dChVc2VyQ29udGV4dClcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZG9jIiwib25TbmFwc2hvdCIsImF1dGgiLCJkYiIsIlVzZXJDb250ZXh0IiwidXNlciIsInVzZXJEYXRhIiwibG9hZGluZyIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlciIsInNldFVzZXJEYXRhIiwic2V0TG9hZGluZyIsInVuc3Vic2NyaWJlQXV0aCIsImN1cnJlbnRVc2VyIiwidXNlckRvYyIsInVpZCIsInVuc3Vic2NyaWJlVXNlciIsInNuYXBzaG90IiwiZXhpc3RzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/context/UserContext.tsx\n");

/***/ }),

/***/ "./lib/firebase.ts":
/*!*************************!*\
  !*** ./lib/firebase.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyD_3fHuwWwssFztj0lIYyOulrq4p6Yv1HQ\",\n    authDomain: \"h2safetyfocused.firebaseapp.com\",\n    projectId: \"h2safetyfocused\",\n    storageBucket: \"h2safetyfocused.appspot.com\",\n    messagingSenderId: \"435674253454\",\n    appId: \"1:435674253454:web:1f4ef81b3ee289ff6561df\"\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\n// Get Auth and Firestore instances\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ3RCO0FBQ1U7QUFFakQsTUFBTUssaUJBQWlCO0lBQ3JCQyxRQUFRQyx5Q0FBd0M7SUFDaERHLFlBQVlILGlDQUE0QztJQUN4REssV0FBV0wsaUJBQTJDO0lBQ3RETyxlQUFlUCw2QkFBK0M7SUFDOURTLG1CQUFtQlQsY0FBb0Q7SUFDdkVXLE9BQU9YLDJDQUF1QztBQUNoRDtBQUVBLHNCQUFzQjtBQUN0QixNQUFNYSxNQUFNLENBQUNuQixxREFBT0EsR0FBR29CLE1BQU0sR0FBR3JCLDJEQUFhQSxDQUFDSyxrQkFBa0JILG9EQUFNQTtBQUV0RSxtQ0FBbUM7QUFDNUIsTUFBTW9CLE9BQU9uQixzREFBT0EsQ0FBQ2lCLEtBQUk7QUFDekIsTUFBTUcsS0FBS25CLGdFQUFZQSxDQUFDZ0IsS0FBSTtBQUNyQiIsInNvdXJjZXMiOlsiL1VzZXJzL3RvYmUvdGVzdGgyL2gyZGV2L2xpYi9maXJlYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHBzLCBnZXRBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lEXG59XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKVxuXG4vLyBHZXQgQXV0aCBhbmQgRmlyZXN0b3JlIGluc3RhbmNlc1xuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcClcbmV4cG9ydCBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApXG5leHBvcnQgeyBhcHAgfVxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBcHBzIiwiZ2V0QXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJhcHAiLCJsZW5ndGgiLCJhdXRoIiwiZGIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/firebase.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/context/UserContext */ \"./lib/context/UserContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_UserContext__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/tobe/testh2/h2dev/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tobe/testh2/h2dev/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBRTBCO0FBRXhELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNILGtFQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMvdG9iZS90ZXN0aDIvaDJkZXYvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBVc2VyUHJvdmlkZXIgfSBmcm9tICdAL2xpYi9jb250ZXh0L1VzZXJDb250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFVzZXJQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1VzZXJQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlVzZXJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();