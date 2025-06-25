declare namespace CustomElements {
    namespace Utilities {
        /**
         * Debounce (call function only once within a specified time)
         * @param fn The function
         * @param time The time intervall
         * @param debounceFirst Whether first or last function call should be executed
         */
        function debounce(fn: Function, time: number, debounceFirst?: boolean): (this: any, ...args: any[]) => void;
    }
    namespace Str {
        /**
         * Add 'px' to a value
         * @param value
         */
        function px(value: string | number): string;
        /**
         * Add 'em' to a value
         * @param value
         */
        function em(value: string | number): string;
        /**
         * Add '%' to a value
         * @param value
         */
        function pct(value: string | number): string;
        /**
         * Add 'px' and font-family to a value. Can be used for css font.
         * @param value
         * @param fontFamily
         */
        function pxFont(value: string | number, fontFamily?: string): string;
    }
}
