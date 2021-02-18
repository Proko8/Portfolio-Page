import psycopg2
from flask import Flask, render_template, request
from os import environ


app = Flask(__name__)
@app.route('/dbaccess', methods=["POST", "GET"])
def run_script():
    if request.method == "POST":
        data = {
        'firstName': request.form['firstName'],
        'lastName': request.form['lastName'],
        'company': request.form['company'],
        'email': request.form['email'],
        }

        conn = psycopg2.connect(dbname=environ.get('DB_NAME'), user=environ.get('DB_USERNAME'), password=environ.get('DB_PASSWORD'), host=environ.get('HOST'), port='5432', sslmode='require')
        cur = conn.cursor()

        def send_info():
            INSERT INTO recruiter_info

        cur.execute(send_info, (data.firstName, data.lastName, data.company, data.email))
        # cur.insert_data(data)
        # cur.commit() 

        # query = '''
        # SELECT
        #     id,
        #     firstname,
        #     lastname,
        #     company,
        #     email
        # FROM recruiter_info
        # '''
        # cur.execute(query.format(1))

        # records = cur.fetchall()
        # print(records)
        cur.close()
        conn.close()
        return 'ok'

if __name__ == '__main__':
    app.run()