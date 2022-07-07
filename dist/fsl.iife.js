(function () {
    'use strict';

    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fsl = exports.exampleCompletion = exports.exampleLanguage = void 0;
    const fsl_lezer_1 = require("./generated_code/fsl.lezer");
    const language_1 = require("@codemirror/language");
    const autocomplete_1 = require("@codemirror/autocomplete");
    const highlight_1 = require("@lezer/highlight");
    const language_2 = require("@codemirror/language");
    let parserWithMetadata = fsl_lezer_1.parser.configure({
        props: [
            (0, highlight_1.styleTags)({
                Identifier: highlight_1.tags.variableName,
                Boolean: highlight_1.tags.bool,
                String: highlight_1.tags.string,
                LineComment: highlight_1.tags.lineComment,
                "( )": highlight_1.tags.paren
            }),
            language_2.indentNodeProp.add({
                Application: context => context.column(context.node.from) + context.unit
            }),
            language_2.foldNodeProp.add({
                Application: language_2.foldInside
            })
        ]
    });
    exports.exampleLanguage = language_2.LRLanguage.define({
        parser: parserWithMetadata,
        languageData: { commentTokens: { line: ";" } }
    });
    exports.exampleCompletion = exports.exampleLanguage.data.of({
        autocomplete: (0, autocomplete_1.completeFromList)([
            { label: "defun", type: "keyword" },
            { label: "defvar", type: "keyword" },
            { label: "let", type: "keyword" },
            { label: "cons", type: "function" },
            { label: "car", type: "function" },
            { label: "cdr", type: "function" }
        ])
    });
    function fsl() {
        return new language_1.LanguageSupport(exports.exampleLanguage, [exports.exampleCompletion]);
    }
    exports.fsl = fsl;

})();
