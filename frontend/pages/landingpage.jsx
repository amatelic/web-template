import React from 'react';
// import { Button as ButtonBasic } from '../components/button/Button';
import { Button, Box, Flex, Heading, Text } from 'rebass';
import './landingpage'

const title = 'Example landing page'
const buttonName = 'Example button'

export default function LandingPage(props ) {
	console.log('This is working', props)
	return (
		<Flex flexDirection="column" justifyContent="center" alignItems="center">
			<Flex flexDirection="column" justifyContent="center" alignItems="center">
				<Heading>
					<Text
						textAlign="center"
						fontWeight='bold'
					>
						{ title }
					</Text>
				</Heading>
			</Flex>
			<Flex my="3">
				<Button  variant='primary' >{ buttonName}</Button>
				<Button variant='outline' > { buttonName }</Button>
			</Flex>
		</Flex>
	)
}