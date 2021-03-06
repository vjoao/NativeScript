﻿/**
 * Contains the FormattedString and Span classes, which are used to create a formatted (rich text) strings.
 */
declare module "text/formatted-string" {
    import spanModule = require("text/span");
    import observable = require("data/observable");
    import observableArray = require("data/observable-array");
    import colorModule = require("color");
    import view = require("ui/core/view");

    /**
     * Interface that specifies View that have formattedText property (like TextBase and Button).
     */
    export interface FormattedStringView {
        formattedText: FormattedString;
    }

    /**
     * A class used to create a formatted (rich text) string.
     */
    class FormattedString extends observable.Observable implements view.AddArrayFromBuilder, view.AddChildFromBuilder {
        /**
         * An observable collection of Span objects used to define common text properties.
         */
        public spans: observableArray.ObservableArray<spanModule.Span>;

        /**
         * Initializes a new instance of FormattedString class.
         */
        constructor();

        /**
         * A human readable representation of the formatted string.
         */
        public toString(): string;

        /**
         * Gets or sets the font family which will be used for all spans that not have a specific value for font family.
         */
        public fontFamily: string;

        /**
         * Gets or sets the font size which will be used for all spans that not have a specific value for font size.
         */
        public fontSize: number;

        /**
         * Gets or sets the font attributes which will be used for all spans that not have a specific value for font attributes.
         */
        public fontAttributes: number;

        /**
         * Gets or sets the font foreground color which will be used for all spans that not have a specific value for font foreground color.
         */
        public foregroundColor: colorModule.Color;

        /**
         * Gets or sets the font background color which will be used for all spans that not have a specific value for font background color.
         */
        public backgroundColor: colorModule.Color;

        /**
         * Gets or sets underline which will be used for all spans that not have a specific value for underline.
         */
        public underline: number;

        /**
         * Gets or sets strikethrough which will be used for all spans that not have a specific value for strikethrough.
         */
        public strikethrough: number;

        /**
         * Propogates binding context through the spans collection.
         * @param newBindingContext The value of the newly set binding context.
         */
        public updateSpansBindingContext(newBindingContext: any): void

        /**
         * Gets the parent view of the formatted string.
         */
        public parent: view.View;

        /**
         * A function that is called when an array declaration is found in xml.
         * @param name - Name of the array.
         * @param value - The actual value of the array.
         */
        public _addArrayFromBuilder(name: string, value: Array<any>): void;

        /**
         * Called for every child element declared in xml.
         * @param name - Name of the element.
         * @param value - Value of the element.
         */
        public _addChildFromBuilder(name: string, value: any): void;

        /**
         * A static method used to add child elements of the FormattedString class to a View declared in xml.
         */
        public static addFormattedStringToView(view: FormattedStringView, name: string, value: any): void; 
    }
}