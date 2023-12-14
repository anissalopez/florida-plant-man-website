"""changing care instructions

Revision ID: e0c07c2ed74c
Revises: 45e341859a5e
Create Date: 2023-12-14 09:38:39.269981

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e0c07c2ed74c'
down_revision = '45e341859a5e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('plants', schema=None) as batch_op:
        batch_op.alter_column('care_instructions',
               existing_type=sa.VARCHAR(),
               type_=sa.BLOB(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('plants', schema=None) as batch_op:
        batch_op.alter_column('care_instructions',
               existing_type=sa.BLOB(),
               type_=sa.VARCHAR(),
               existing_nullable=True)

    # ### end Alembic commands ###
