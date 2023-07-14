const { styled } = require('@mui/system');
const React = require('react');

module.exports.FlexRow = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems:'flex-start',
	flexWrap: 'wrap',
	justifyContent: 'flex-start'
}));

module.exports.FlexCol = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems:'flex-start',
	flexWrap: 'wrap',
	justifyContent: 'flex-start'
}));
