import { makeSchema, queryType , objectType , mutationType} from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import path from "path";

const Register = objectType({
  name: "Register",
  definition(t) {
    t.model.id();
    t.model.firstName();
    t.model.lastName();
    t.model.phone();
    t.model.lineId();
    t.model.password();
  },
})

const BankAccount = objectType({
  name: "BankAccount",
  definition(t) {
    t.model.id();
    t.model.bankId();
    t.model.bankName();
    t.model.number();
  },
})

const Bank = objectType({
  name: "Bank",
  definition(t) {
    t.model.id();
    t.model.nameShort();
    t.model.nameFull();
  },
})

const Bonus = objectType({
  name: "Bonus",
  definition(t) {
    t.model.id();
    t.model.accept_condition();
  },
})

const Query = queryType({
  definition(t) {
  t.crud.register();
  t.crud.bankAccount();
  t.crud.registers({ pagination: true, filtering: true });
  },
});
  
const Mutation = mutationType ({
  definition(t){
    t.crud.createOneRegister();
    t.crud.createOneBankAccount();
    // t.crud.createOneBank();
    // t.crud.deleteOneRegister();
    // t.crud.updateOneRegister();
    // t.crud.upsertOneRegister();
  },
});

export const schema = makeSchema({
  types : { Register,Bonus,BankAccount,Bank,Query,Mutation },
  plugins: [nexusSchemaPrisma({experimentalCRUD : true })],
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "nexus.ts"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("./context"),
        alias: "Context",
      },
    ],
  },
});
