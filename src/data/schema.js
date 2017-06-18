import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import DB from './models';
import news from './queries/news';
import me from './queries/me';


//뭐임? object type 인가?
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

//읽기작업
const Query = new ObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      member: {   //  멤버 불러오기
        type: new GraphQLList(Member),//위에 있는 Member type
        args: {//매게변수
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
      // news.js 뉴스 불러오기
    }
  }
});

//수정작업
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

//일반 타입은 그냥해도되는데
//query, mutation만큼은 스미카 속에 넣는다
const schema = new Schema({
  query: Query,
  mutation: Mutation
});

export default schema;
