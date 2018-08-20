import Sugar from 'sugar'
export default {
    capitalize: (value) => Sugar.String.capitalize(value, true, true),
    upper: (value) => value.toUpperCase
}