CREATE TABLE "public"."active_credit"( 
	"ac_id" int NOT NULL,
	"ac_credit" int NOT NULL,
	"ac_months_to_pay" double precision NOT NULL,
	"ac_price_to_pay" numeric NOT NULL);

CREATE TABLE "public"."big_company_request"( 
	"bcr_id" int NOT NULL,
	"bcr_request" int NOT NULL,
	"bcr_financial_reporting" int NOT NULL);

CREATE TABLE "public"."borrower"( 
	"b_id" int NOT NULL,
	"b_user" int NOT NULL,
	"b_balance" numeric NOT NULL,
	"b_payment_account" varchar(50) NOT NULL);

CREATE TABLE "public"."borrower_level"( 
	"bl_id" smallint NOT NULL,
	"bl_name" varchar(20) NOT NULL);

CREATE TABLE "public"."city"( 
	"city_id" int NOT NULL,
	"city_name" varchar(25) NOT NULL);

CREATE TABLE "public"."company"( 
	"c_id" varchar(50) NOT NULL,
	"c_borrower" int NOT NULL,
	"c_name" varchar(50) NOT NULL,
	"c_registration_id" int NOT NULL,
	"c_financial_reporting" int NOT NULL,
	"c_is_small_business" boolean NOT NULL);

CREATE TABLE "public"."company_request"( 
	"cr_id" int NOT NULL,
	"cr_company_name" varchar(40) NOT NULL,
	"cr_request" int NOT NULL,
	"cr_company_reg_id" int NOT NULL);

CREATE TABLE "public"."credit"( 
	"c_id" int NOT NULL,
	"c_borrower" int NOT NULL,
	"c_type" smallint NOT NULL,
	"c_aim" varchar(100),
	"c_price" numeric NOT NULL,
	"c_months_to_pay" double precision NOT NULL,
	"c_agreed_procent_per_month" double precision NOT NULL,
	"c_is_active" boolean NOT NULL,
	"c_activation_time" timestamp,
	"c_other_conditions_definition" varchar(100));

CREATE TABLE "public"."credit_history"( 
	"ch_id" int NOT NULL,
	"ch_credit" int NOT NULL,
	"ch_paid_time" timestamp,
	"ch_borrower" int NOT NULL);

CREATE TABLE "public"."credit_request"( 
	"rs_id" smallint NOT NULL,
	"rs_request" int NOT NULL,
	"s_credit" int NOT NULL);

CREATE TABLE "public"."financial_reporting"( 
	"fr_id" int NOT NULL,
	"fr_average_income_per_month" numeric NOT NULL,
	"fr_tax_payment_per_year" numeric NOT NULL);

CREATE TABLE "public"."guarantor"( 
	"g_id" int NOT NULL,
	"g_pers_num" int NOT NULL,
	"g_pers_seria" varchar(5) NOT NULL,
	"g_working_place" varchar(50),
	"g_occupied_position" varchar(50),
	"g_income_per_month" numeric NOT NULL);

CREATE TABLE "public"."income"( 
	"i_id" int NOT NULL,
	"i_start_of_time_diap" timestamp NOT NULL,
	"i_end_of_time_diap" timestamp NOT NULL,
	"i_net_proceeds" numeric NOT NULL,
	"i_summary_income" numeric NOT NULL,
	"i_summary_tax_payed" numeric NOT NULL,
	"i_financial_reporting" int NOT NULL);

CREATE TABLE "public"."m2m_guarantor_credit"( 
	"gc_guarantor" int NOT NULL,
	"gc_credit" int NOT NULL);

CREATE TABLE "public"."m2m_person_guarantor"( 
	"pg_person" int NOT NULL,
	"pg_guarantor" int NOT NULL,
	"pg_amount_of_inv_credits_paid" int NOT NULL);

CREATE TABLE "public"."message"( 
	"m_id" int NOT NULL,
	"m_borrower" int NOT NULL,
	"m_from_who" int NOT NULL,
	"m_sending_time" timestamp NOT NULL,
	"m_message_text" varchar(100) NOT NULL);

CREATE TABLE "public"."overdue_credit"( 
	"oc_id" int NOT NULL,
	"oc_months_of_overdue" double precision NOT NULL,
	"oc_price_of_overdue" numeric NOT NULL,
	"oc_credit" int NOT NULL);

CREATE TABLE "public"."person"( 
	"p_id" int NOT NULL,
	"p_borrower" int NOT NULL,
	"p_accounting_feedback" varchar(50),
	"p_working_place" varchar(50),
	"p_occupied_position" varchar(50),
	"p_income_per_month" numeric NOT NULL);

CREATE TABLE "public"."personality"( 
	"p_passport_number" int NOT NULL,
	"p_passport_series" varchar(5) NOT NULL,
	"p_building" varchar(10) NOT NULL,
	"p_street" int NOT NULL,
	"p_city" int NOT NULL,
	"p_name" varchar(25) NOT NULL,
	"p_surname" varchar(25) NOT NULL);

CREATE TABLE "public"."potential_pledge"( 
	"pp_id" int NOT NULL,
	"pp_name" varchar(50) NOT NULL,
	"pp_borrower" int NOT NULL,
	"pp_total_price" numeric NOT NULL,
	"pp_is_estate" boolean NOT NULL);

CREATE TABLE "public"."request"( 
	"r_id" int NOT NULL,
	"r_borrower" int NOT NULL,
	"r_sending_time" timestamp NOT NULL,
	"r_status" smallint NOT NULL);

CREATE TABLE "public"."request_status"( 
	"rs_id" smallint NOT NULL,
	"rs_name" varchar(40) NOT NULL);

CREATE TABLE "public"."role"( 
	"r_id" smallint NOT NULL,
	"r_name" varchar(40) NOT NULL);

CREATE TABLE "public"."street"( 
	"street_id" int NOT NULL,
	"street_name" varchar(25) NOT NULL);

CREATE TABLE "public"."type"( 
	"t_id" smallint NOT NULL,
	"t_name" varchar(50) NOT NULL,
	"t_procent_per_year_upper" double precision,
	"t_procent_per_year_lower" double precision NOT NULL,
	"t_borrower_level" smallint NOT NULL,
	"t_max_price" int NOT NULL,
	"t_down_payment_proc" double precision);

CREATE TABLE "public"."user"( 
	"u_id" int NOT NULL,
	"u_email" varchar(40) NOT NULL,
	"u_md5_password" varchar(40) NOT NULL,
	"u_role" smallint NOT NULL,
	"u_status" smallint NOT NULL,
	"u_pers_num" int NOT NULL,
	"u_pers_seria" varchar(5) NOT NULL);

CREATE TABLE "public"."user_status"( 
	"us_id" smallint NOT NULL,
	"us_name" varchar(40) NOT NULL);

CREATE SEQUENCE "public"."active_credit_ac_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."active_credit"."ac_id";
CREATE SEQUENCE "public"."big_company_request_bcr_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."big_company_request"."bcr_id";
CREATE SEQUENCE "public"."borrower_b_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."borrower"."b_id";
CREATE SEQUENCE "public"."borrower_level_bl_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."borrower_level"."bl_id";
CREATE SEQUENCE "public"."city_city_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."city"."city_id";
CREATE SEQUENCE "public"."company_request_cr_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."company_request"."cr_id";
CREATE SEQUENCE "public"."credit_c_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."credit"."c_id";
CREATE SEQUENCE "public"."credit_history_ch_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."credit_history"."ch_id";
CREATE SEQUENCE "public"."credit_request_rs_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."credit_request"."rs_id";
CREATE SEQUENCE "public"."financial_reporting_fr_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."financial_reporting"."fr_id";
CREATE SEQUENCE "public"."guarantor_g_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."guarantor"."g_id";
CREATE SEQUENCE "public"."m2m_guarantor_credit_gc_guarantor_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."m2m_guarantor_credit"."gc_guarantor";
CREATE SEQUENCE "public"."m2m_person_guarantor_pg_person_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."m2m_person_guarantor"."pg_person";
CREATE SEQUENCE "public"."mail_m_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."mail"."m_id";
CREATE SEQUENCE "public"."overdue_credit_oc_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."overdue_credit"."oc_id";
CREATE SEQUENCE "public"."person_p_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."person"."p_id";
CREATE SEQUENCE "public"."potential_pledge_pp_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."potential_pledge"."pp_id";
CREATE SEQUENCE "public"."request_r_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."request"."r_id";
CREATE SEQUENCE "public"."request_status_rs_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."request_status"."rs_id";
CREATE SEQUENCE "public"."role_r_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."role"."r_id";
CREATE SEQUENCE "public"."street_street_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."street"."street_id";
CREATE SEQUENCE "public"."type_t_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."type"."t_id";
CREATE SEQUENCE "public"."user_status_us_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."user_status"."us_id";
CREATE SEQUENCE "public"."user_u_id_seq" INCREMENT BY 1 START WITH 1 OWNED BY "public"."user"."u_id";
ALTER TABLE "public"."active_credit" ADD CONSTRAINT "pk_active_credit" PRIMARY KEY ("ac_id");
ALTER TABLE "public"."big_company_request" ADD CONSTRAINT "pk_big_company_request" PRIMARY KEY ("bcr_id");
ALTER TABLE "public"."borrower" ADD CONSTRAINT "pk_borrower" PRIMARY KEY ("b_id");
ALTER TABLE "public"."borrower_level" ADD CONSTRAINT "pk_borrower_level" PRIMARY KEY ("bl_id");
ALTER TABLE "public"."city" ADD CONSTRAINT "pk_city" PRIMARY KEY ("city_id");
ALTER TABLE "public"."company" ADD CONSTRAINT "pk_company" PRIMARY KEY ("c_id");
ALTER TABLE "public"."company_request" ADD CONSTRAINT "pk_company_request" PRIMARY KEY ("cr_id");
ALTER TABLE "public"."credit" ADD CONSTRAINT "pk_credit" PRIMARY KEY ("c_id");
ALTER TABLE "public"."credit_history" ADD CONSTRAINT "pk_credit_history" PRIMARY KEY ("ch_id");
ALTER TABLE "public"."credit_request" ADD CONSTRAINT "pk_credit_request" PRIMARY KEY ("rs_id");
ALTER TABLE "public"."financial_reporting" ADD CONSTRAINT "pk_financial_reporting" PRIMARY KEY ("fr_id");
ALTER TABLE "public"."guarantor" ADD CONSTRAINT "pk_guarantor" PRIMARY KEY ("g_id");
ALTER TABLE "public"."income" ADD CONSTRAINT "pk_income" PRIMARY KEY ("i_id");
ALTER TABLE "public"."m2m_guarantor_credit" ADD CONSTRAINT "pk_m2m_guarantor_credit" PRIMARY KEY ("gc_guarantor","gc_credit");
ALTER TABLE "public"."m2m_person_guarantor" ADD CONSTRAINT "pk_m2m_person_guarantor" PRIMARY KEY ("pg_person","pg_guarantor");
ALTER TABLE "public"."message" ADD CONSTRAINT "pk_message" PRIMARY KEY ("m_id","m_borrower");
ALTER TABLE "public"."overdue_credit" ADD CONSTRAINT "pk_overdue_credit" PRIMARY KEY ("oc_id");
ALTER TABLE "public"."person" ADD CONSTRAINT "pk_person" PRIMARY KEY ("p_id");
ALTER TABLE "public"."personality" ADD CONSTRAINT "pk_personality" PRIMARY KEY ("p_passport_number","p_passport_series");
ALTER TABLE "public"."potential_pledge" ADD CONSTRAINT "pk_potential_pledge" PRIMARY KEY ("pp_id");
ALTER TABLE "public"."request" ADD CONSTRAINT "pk_request" PRIMARY KEY ("r_id");
ALTER TABLE "public"."request_status" ADD CONSTRAINT "pk_request_status" PRIMARY KEY ("rs_id");
ALTER TABLE "public"."role" ADD CONSTRAINT "pk_role" PRIMARY KEY ("r_id");
ALTER TABLE "public"."street" ADD CONSTRAINT "pk_street" PRIMARY KEY ("street_id");
ALTER TABLE "public"."type" ADD CONSTRAINT "pk_type" PRIMARY KEY ("t_id");
ALTER TABLE "public"."user" ADD CONSTRAINT "pk_user" PRIMARY KEY ("u_id");
ALTER TABLE "public"."user_status" ADD CONSTRAINT "pk_status" PRIMARY KEY ("us_id");
ALTER TABLE "public"."active_credit" ADD CONSTRAINT "fk_active_credit_credit" FOREIGN KEY ("ac_credit") REFERENCES "public"."credit" ( "c_id");
ALTER TABLE "public"."big_company_request" ADD CONSTRAINT "fk_big_company_request_financial_reporting" FOREIGN KEY ("bcr_financial_reporting") REFERENCES "public"."financial_reporting" ( "fr_id");
ALTER TABLE "public"."big_company_request" ADD CONSTRAINT "fk_big_company_request_request" FOREIGN KEY ("bcr_request") REFERENCES "public"."request" ( "r_id");
ALTER TABLE "public"."borrower" ADD CONSTRAINT "fk_borrower_user" FOREIGN KEY ("b_user") REFERENCES "public"."user" ( "u_id");
ALTER TABLE "public"."company" ADD CONSTRAINT "fk_company_borrower" FOREIGN KEY ("c_borrower") REFERENCES "public"."borrower" ( "b_id");
ALTER TABLE "public"."company" ADD CONSTRAINT "fk_company_financial_reporting" FOREIGN KEY ("c_financial_reporting") REFERENCES "public"."financial_reporting" ( "fr_id");
ALTER TABLE "public"."company_request" ADD CONSTRAINT "fk_company_request_request" FOREIGN KEY ("cr_request") REFERENCES "public"."request" ( "r_id");
ALTER TABLE "public"."credit" ADD CONSTRAINT "fk_credit_borrower" FOREIGN KEY ("c_borrower") REFERENCES "public"."borrower" ( "b_id");
ALTER TABLE "public"."credit" ADD CONSTRAINT "fk_credit_type" FOREIGN KEY ("c_type") REFERENCES "public"."type" ( "t_id");
ALTER TABLE "public"."credit_history" ADD CONSTRAINT "fk_credit_history_borrower" FOREIGN KEY ("ch_borrower") REFERENCES "public"."borrower" ( "b_id");
ALTER TABLE "public"."credit_history" ADD CONSTRAINT "fk_credit_history_credit" FOREIGN KEY ("ch_credit") REFERENCES "public"."credit" ( "c_id");
ALTER TABLE "public"."credit_request" ADD CONSTRAINT "fk_credit_request_credit" FOREIGN KEY ("s_credit") REFERENCES "public"."credit" ( "c_id");
ALTER TABLE "public"."credit_request" ADD CONSTRAINT "fk_credit_request_request" FOREIGN KEY ("rs_request") REFERENCES "public"."request" ( "r_id");
ALTER TABLE "public"."guarantor" ADD CONSTRAINT "fk_guarantor_personality" FOREIGN KEY ("g_pers_num","g_pers_seria") REFERENCES "public"."personality" ( "p_passport_number","p_passport_series");
ALTER TABLE "public"."income" ADD CONSTRAINT "fk_income_financial_reporting" FOREIGN KEY ("i_financial_reporting") REFERENCES "public"."financial_reporting" ( "fr_id");
ALTER TABLE "public"."m2m_guarantor_credit" ADD CONSTRAINT "fk_m2m_guarantor_credit_credit" FOREIGN KEY ("gc_credit") REFERENCES "public"."credit" ( "c_id");
ALTER TABLE "public"."m2m_guarantor_credit" ADD CONSTRAINT "fk_m2m_guarantor_credit_guarantor" FOREIGN KEY ("gc_guarantor") REFERENCES "public"."guarantor" ( "g_id");
ALTER TABLE "public"."m2m_person_guarantor" ADD CONSTRAINT "fk_m2m_person_guarantor_guarantor" FOREIGN KEY ("pg_guarantor") REFERENCES "public"."guarantor" ( "g_id");
ALTER TABLE "public"."m2m_person_guarantor" ADD CONSTRAINT "fk_m2m_person_guarantor_person" FOREIGN KEY ("pg_person") REFERENCES "public"."person" ( "p_id");
ALTER TABLE "public"."message" ADD CONSTRAINT "fk_message_borrower" FOREIGN KEY ("m_borrower") REFERENCES "public"."borrower" ( "b_id");
ALTER TABLE "public"."message" ADD CONSTRAINT "fk_message_user" FOREIGN KEY ("m_from_who") REFERENCES "public"."user" ( "u_id");
ALTER TABLE "public"."overdue_credit" ADD CONSTRAINT "fk_overdue_credit_credit" FOREIGN KEY ("oc_credit") REFERENCES "public"."credit" ( "c_id");
ALTER TABLE "public"."person" ADD CONSTRAINT "fk_person_borrower" FOREIGN KEY ("p_borrower") REFERENCES "public"."borrower" ( "b_id");
ALTER TABLE "public"."personality" ADD CONSTRAINT "fk_personality_city" FOREIGN KEY ("p_city") REFERENCES "public"."city" ( "city_id");
ALTER TABLE "public"."personality" ADD CONSTRAINT "fk_personality_street" FOREIGN KEY ("p_street") REFERENCES "public"."street" ( "street_id");
ALTER TABLE "public"."potential_pledge" ADD CONSTRAINT "fk_potential_pledge_borrower" FOREIGN KEY ("pp_borrower") REFERENCES "public"."borrower" ( "b_id");
ALTER TABLE "public"."request" ADD CONSTRAINT "fk_request_borrower" FOREIGN KEY ("r_borrower") REFERENCES "public"."borrower" ( "b_id");
ALTER TABLE "public"."request" ADD CONSTRAINT "fk_request_request_status" FOREIGN KEY ("r_status") REFERENCES "public"."request_status" ( "rs_id");
ALTER TABLE "public"."type" ADD CONSTRAINT "fk_type_borrower_level" FOREIGN KEY ("t_borrower_level") REFERENCES "public"."borrower_level" ( "bl_id");
ALTER TABLE "public"."user" ADD CONSTRAINT "fk_user_personality" FOREIGN KEY ("u_pers_num","u_pers_seria") REFERENCES "public"."personality" ( "p_passport_number","p_passport_series");
ALTER TABLE "public"."user" ADD CONSTRAINT "fk_user_role" FOREIGN KEY ("u_role") REFERENCES "public"."role" ( "r_id");
ALTER TABLE "public"."user" ADD CONSTRAINT "fk_user_user_status" FOREIGN KEY ("u_status") REFERENCES "public"."user_status" ( "us_id");
ALTER TABLE "public"."active_credit" ALTER COLUMN "ac_id" SET DEFAULT nextval('"public"."active_credit_ac_id_seq"');
ALTER TABLE "public"."big_company_request" ALTER COLUMN "bcr_id" SET DEFAULT nextval('"public"."big_company_request_bcr_id_seq"');
ALTER TABLE "public"."borrower" ALTER COLUMN "b_id" SET DEFAULT nextval('"public"."borrower_b_id_seq"');
ALTER TABLE "public"."borrower_level" ALTER COLUMN "bl_id" SET DEFAULT nextval('"public"."borrower_level_bl_id_seq"');
ALTER TABLE "public"."city" ALTER COLUMN "city_id" SET DEFAULT nextval('"public"."city_city_id_seq"');
ALTER TABLE "public"."company_request" ALTER COLUMN "cr_id" SET DEFAULT nextval('"public"."company_request_cr_id_seq"');
ALTER TABLE "public"."credit" ALTER COLUMN "c_id" SET DEFAULT nextval('"public"."credit_c_id_seq"');
ALTER TABLE "public"."credit_history" ALTER COLUMN "ch_id" SET DEFAULT nextval('"public"."credit_history_ch_id_seq"');
ALTER TABLE "public"."credit_request" ALTER COLUMN "rs_id" SET DEFAULT nextval('"public"."credit_request_rs_id_seq"');
ALTER TABLE "public"."financial_reporting" ALTER COLUMN "fr_id" SET DEFAULT nextval('"public"."financial_reporting_fr_id_seq"');
ALTER TABLE "public"."guarantor" ALTER COLUMN "g_id" SET DEFAULT nextval('"public"."guarantor_g_id_seq"');
ALTER TABLE "public"."m2m_guarantor_credit" ALTER COLUMN "gc_guarantor" SET DEFAULT nextval('"public"."m2m_guarantor_credit_gc_guarantor_seq"');
ALTER TABLE "public"."m2m_person_guarantor" ALTER COLUMN "pg_person" SET DEFAULT nextval('"public"."m2m_person_guarantor_pg_person_seq"');
ALTER TABLE "public"."mail" ALTER COLUMN "m_id" SET DEFAULT nextval('"public"."mail_m_id_seq"');
ALTER TABLE "public"."overdue_credit" ALTER COLUMN "oc_id" SET DEFAULT nextval('"public"."overdue_credit_oc_id_seq"');
ALTER TABLE "public"."person" ALTER COLUMN "p_id" SET DEFAULT nextval('"public"."person_p_id_seq"');
ALTER TABLE "public"."potential_pledge" ALTER COLUMN "pp_id" SET DEFAULT nextval('"public"."potential_pledge_pp_id_seq"');
ALTER TABLE "public"."request" ALTER COLUMN "r_id" SET DEFAULT nextval('"public"."request_r_id_seq"');
ALTER TABLE "public"."request_status" ALTER COLUMN "rs_id" SET DEFAULT nextval('"public"."request_status_rs_id_seq"');
ALTER TABLE "public"."role" ALTER COLUMN "r_id" SET DEFAULT nextval('"public"."role_r_id_seq"');
ALTER TABLE "public"."street" ALTER COLUMN "street_id" SET DEFAULT nextval('"public"."street_street_id_seq"');
ALTER TABLE "public"."type" ALTER COLUMN "t_id" SET DEFAULT nextval('"public"."type_t_id_seq"');
ALTER TABLE "public"."user" ALTER COLUMN "u_id" SET DEFAULT nextval('"public"."user_u_id_seq"');
ALTER TABLE "public"."user_status" ALTER COLUMN "us_id" SET DEFAULT nextval('"public"."user_status_us_id_seq"');

