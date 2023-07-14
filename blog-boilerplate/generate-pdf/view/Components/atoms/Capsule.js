
const React = require('react');
const {FlexRow} = require('../Flex/index.js')
const { styled } = require('@mui/system');

const CapsuleWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.colors.blue['200'],
    color: theme.palette.colors.blue['700'],
    padding: '5px 10px',
    borderRadius: '25px',
	margin: '5px',

}));

const Capsule = ({
    text,
    styling = {}
}) => {
	return (
		<CapsuleWrapper sx={{...styling}}>
            {text}
        </CapsuleWrapper>
	)
}


module.exports = Capsule