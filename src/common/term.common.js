module.exports = {
    type: {
        CATEGORY: 1,
        PROVIDER: 2,
        TYPE: 3
    },
    textType: function (type) {
        let textType = '';
        switch (Number(type)) {
            case 1:
                textType = 'nghành nghề';
                break;
            case 3:
                textType = 'hình thức';
                break;
            default:
                textType = '';
                break;
        }
        return textType;
    }
}