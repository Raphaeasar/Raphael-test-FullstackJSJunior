PGDMP     	                    z            testefullstack    14.2    14.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    testefullstack    DATABASE     n   CREATE DATABASE testefullstack WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE testefullstack;
                postgres    false            ?            1259    16400    users    TABLE     z   CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(100),
    senha character varying(50)
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16399    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    209            \           2604    16403    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            ?          0    16400    users 
   TABLE DATA           1   COPY public.users (id, email, senha) FROM stdin;
    public          postgres    false    210   ;
       ?           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 21, true);
          public          postgres    false    209            ^           2606    16405    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            ?      x?????? ? ?     