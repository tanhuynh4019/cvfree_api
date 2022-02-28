module.exports = {
    type: {
        CATEGORY: 1,
        PROVIDER: 2
    },
    textType: function (type) {
        let textType = '';
        switch (Number(type)) {
            case 1:
                textType = 'nghành nghề';
                break;
            default:
                textType = '';
                break;
        }
        return textType;
    }
}