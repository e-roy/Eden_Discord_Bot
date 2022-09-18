import { gql } from 'graphql-request';
import { GraphQL_CreateRoomMutation, GraphQL_CreateRoomMutationVariables } from '../gql/result';
import { myMutation } from '../graph';

const request = gql`
	mutation CreateRoom($fields: createRoomInput!) {
		createRoom(fields: $fields) {
			_id
		}
	}
`;

export async function createRoom() {
	return myMutation<GraphQL_CreateRoomMutationVariables, GraphQL_CreateRoomMutation>({
		request: request,
		variable: {
			fields: {}
		}
	});
}
