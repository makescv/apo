import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import DB from './models';
import news from './queries/news';

const Member = new ObjectType({
  name: 'Member',
  description: 'This represents a member',
  fields: () => {
    return {
      member_id: {
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
      },
      name: {
        type: GraphQLString,
        resolve(member) {
          return member.name;
        }
      },
      mobile: {
        type: GraphQLString,
        resolve(member) {
          return member.mobile;
        }
      },
    }
  }
});

const Query = new ObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      member: {
        type: new GraphQLList(Member),
        args: {
          member_id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return DB.models.Member.findAll({where: args});
        }
      },
      news
    }
  }
});

const Mutation = new ObjectType({
  name: 'Mutation',
  description: 'This is a mutation',
  fields() {
    return {
      addMember: {
        type: Member,
        args: {
          // member_id: {
          //   type: new GraphQLNonNull(GraphQLInt),
          // },
          email : {
            type: GraphQLString
          },
          name : {
            type: GraphQLString
          },
          password : {
            type: GraphQLString
          }
        },
        resolve(_, args) {
          return DB.models.Member.create({
            // member_id: args.member_id,
            email: args.email.toLowerCase(),
            name: args.name,
            password: args.password
          });
        }
      }
    }
  },
});

const schema = new Schema({
  query: Query,
  mutation: Mutation
});

export default schema;
