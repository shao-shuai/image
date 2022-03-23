from sqlalchemy import (
    create_engine,
    MetaData,
    Table,
    Column,
    ForeignKeyConstraint,
    Boolean,
    Date,
    DateTime,
    Float,
    Integer,
    String,
    insert
)
from sqlalchemy.ext.declarative import declarative_base

SQLITE_DB_NAME = "./bridge.sqlite"

def connect_to_database(sqltype="sqlite", fname=SQLITE_DB_NAME):
    eng = create_engine(f"{sqltype}:///{fname}")

    return eng

def test(a, b):
    
    return a+b