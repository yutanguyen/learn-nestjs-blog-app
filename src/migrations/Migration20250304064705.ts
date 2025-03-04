import { Migration } from '@mikro-orm/migrations';

export class Migration20250304064705 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "category_posts" ("category_id" uuid not null, "post_id" uuid not null, constraint "category_posts_pkey" primary key ("category_id", "post_id"));`);

    this.addSql(`alter table "category_posts" add constraint "category_posts_category_id_foreign" foreign key ("category_id") references "category" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "category_posts" add constraint "category_posts_post_id_foreign" foreign key ("post_id") references "post" ("id") on update cascade on delete cascade;`);

    this.addSql(`drop table if exists "post_category" cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`create table "post_category" ("id" uuid not null default gen_random_uuid(), "post_id" uuid not null, "category_id" uuid not null, constraint "post_category_pkey" primary key ("id"));`);

    this.addSql(`alter table "post_category" add constraint "post_category_category_id_foreign" foreign key ("category_id") references "category" ("id") on update cascade on delete no action;`);
    this.addSql(`alter table "post_category" add constraint "post_category_post_id_foreign" foreign key ("post_id") references "post" ("id") on update cascade on delete no action;`);

    this.addSql(`drop table if exists "category_posts" cascade;`);
  }

}
