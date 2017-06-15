// 170608 현재 사용하지 않음
// 추후에 member에서 사용할 예정

// import UserType from '../types/UserType';
//
// const me = {
//   type: UserType,
//   resolve({ request }) {
//     return request.user && {
//       id: request.user.id,
//       email: request.user.email,
//     };
//   },
// };
//
// export default me;


import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

import DB from '../models';

const Member = new GraphQLObjectType({
  name: 'Member',
  description: 'This represents a Person',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(member) {
          return member.member_id;
        }
      },
      email: {
        type: GraphQLString,
        resolve(member) {
          return member.email;
        }
      }
    }
  }
});
