/* eslint-env node */
module.exports = {
    root: true,
    extends: ["../../../.eslintrc.js"],
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            parser: "@typescript-eslint/parser",
            plugins: ["import", "prettier", "@typescript-eslint"],
            extends: ["plugin:@typescript-eslint/recommended"],
            rules: {
                "react/jsx-filename-extension": "off",
                "prettier/prettier": ["error"],

                "arrow-body-style": ["error", "always"], // 화살표 함수라도 항상 함수 바디가 있도록 강제함
                /** NOTE
                 * 아래는 exp rule이라 정확히 분석하고 적용하기
                 */
                "consistent-return": "off", // 모든 함수에 꼭 return이 없어도 되도록 허용
                "no-tabs": "off",
                "object-curly-newline": "off",
                "no-param-reassign": [
                    "error",
                    {
                        ignorePropertyModificationsForRegex: ["^draft."],
                    },
                ],
                "no-underscore-dangle": "off",
                // for prettier
                "operator-linebreak": [
                    "error",
                    "after",
                    { overrides: { "?": "before", ":": "before" } },
                ],
                "implicit-arrow-linebreak": "off",

                "react/require-default-props": ["off"], // default props 관련 rule
                "react/jsx-no-undef": ["error"],
                "react/jsx-props-no-spreading": "off", // spreading 가능하게 하려함 - ex {...props}
                "react/jsx-no-constructed-context-values": "off", // memoization 되지 않은 값도 Context.Provider에 사용할 수 있게 제한 해제함
                "react/self-closing-comp": [
                    "warn",
                    {
                        html: false,
                    },
                ], // html tag외에 컴포넌트만 self closing을 가능하게 함
                "react/no-unstable-nested-components": "warn", // 컴포넌트 안에 컴포넌트를 구현하지 않게 막는 rule
                "react/no-invalid-html-attribute": "warn", // invalid한 html attribute를 넣지 못하게 막는 rule

                /** NOTE: 고민 좀 해보고 사용할지 말지 판단할 rule */
                "react/prop-types": "off",

                "import/no-unresolved": ["error", { ignore: ["^#.+$"] }],
                // 'import/no-unresolved': 'off',
                "import/prefer-default-export": "off",
            },
        },
    ],
};
