﻿require("globals");
import definition = require("application");
import observable = require("data/observable");
import frame = require("ui/frame");
import cssSelector = require("ui/styling/css-selector");
import * as fileSystemModule from "file-system";
import * as styleScopeModule from "ui/styling/style-scope";

var events = new observable.Observable();
global.moduleMerge(events, exports);

export var launchEvent = "launch";
export var suspendEvent = "suspend";
export var resumeEvent = "resume";
export var exitEvent = "exit";
export var lowMemoryEvent = "lowMemory";
export var uncaughtErrorEvent = "uncaughtError";
export var orientationChangedEvent = "orientationChanged";

export var mainModule: string;
export var mainEntry: frame.NavigationEntry;

export var cssFile: string = "app.css"

export var cssSelectorsCache: Array<cssSelector.CssSelector> = undefined;

export var resources: any = {};

export var onUncaughtError: (error: definition.NativeScriptError) => void = undefined;

export var onLaunch: (context: any) => any = undefined;

export var onSuspend: () => any = undefined;

export var onResume: () => any = undefined;

export var onExit: () => any = undefined;

export var onLowMemory: () => any = undefined;

export var android = undefined;

export var ios = undefined;

export function loadCss(cssFile?: string): Array<cssSelector.CssSelector> {
    if (!cssFile) {
        return undefined;
    }

    var result: Array<cssSelector.CssSelector>;

    var fs: typeof fileSystemModule = require("file-system");
    var styleScope: typeof styleScopeModule = require("ui/styling/style-scope");

    var cssFileName = fs.path.join(fs.knownFolders.currentApp().path, cssFile);
    if (fs.File.exists(cssFileName)) {
        var file = fs.File.fromPath(cssFileName);
        var applicationCss = file.readTextSync();
        if (applicationCss) {
            result = styleScope.StyleScope.createSelectorsFromCss(applicationCss, cssFileName);
        }
    }

    return result;
}