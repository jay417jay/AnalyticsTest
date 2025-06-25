declare namespace CustomElements {
    class AutoSearchSelect extends AnalyticsBaseCustomElement {
        /** Min of width/height */
        protected __acutalSize: number;
        protected __autocompleteElement: HTMLInputElement | null;
        protected __inputElement: HTMLInputElement | null;
        protected __hasChanged: boolean;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        protected __onSizeChanged(): void;
        private __selectSelectWidth;
        /** Width of the control */
        get selectSelectWidth(): string;
        set selectSelectWidth(value: string);
        protected __onSelectWidthChanged(): void;
        private __defaultText;
        /** Default Text of the Select */
        get defaultText(): string;
        set defaultText(value: string);
        protected __onDefaultTextChanged(): void;
        private __selectItems;
        /** Items which can be selected */
        get selectItems(): I_AutoSearchSelectItem[];
        set selectItems(value: I_AutoSearchSelectItem[]);
        protected __onSelectItemsChanged(): void;
        private __selectedItem;
        /** Selected Item */
        get selectedItem(): I_AutoSearchSelectItem;
        set selectedItem(value: I_AutoSearchSelectItem);
        protected __onSelectItemChanged(): void;
        protected __processSelectWidth(): void;
        protected __processDefaultText(): void;
        protected __processSelectItems(): void;
        protected __processSelectedItems(): void;
        protected __onUserInput(event?: Event | null): void;
        private __displayItems;
        protected __processSelectedValue(selectedItem: I_AutoSearchSelectItem, dispatchEvent?: boolean): void;
        protected __addEventListeners(): void;
        protected __getHtml(): string;
    }
    interface I_AutoSearchSelectItem {
        value: string;
        displayText: string;
        isSelectable: boolean;
    }
    class AutoSearchSelectEventNames {
        static selectedValueChanged: string;
    }
}
