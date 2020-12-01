/**
 * External dependencies
 */
import config from 'config';

/**
 * Internal dependencies
 */
import { StoreOwnerFlow } from '@woocommerce/e2e-utils';

const TIMEOUT = 20000;

describe( 'Store Owner', () => {
	it( 'Store owner can log in', async () => {
		await StoreOwnerFlow.login();
	}, TIMEOUT );
} );
