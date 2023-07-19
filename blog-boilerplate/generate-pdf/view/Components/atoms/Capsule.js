
const React = require('react');
const { styled } = require('@mui/system');
const { Typography } = require('@mui/material');

const CapsuleWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.colors.blue['50'],
    color: theme.palette.colors.blue['700'],
    padding: '5px 10px',
    borderRadius: '25px',
	margin: '5px',
}));

const Capsule = ({
    text,
}) => {
	return (
		<CapsuleWrapper>
            <Typography variant='caption'>{text}</Typography>
        </CapsuleWrapper>
	)
}


module.exports = Capsule