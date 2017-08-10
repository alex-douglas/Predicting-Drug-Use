import pickle
import functions
import pandas as pd
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

X = pickle.load(open('X.pickle', 'rb'))
y = pickle.load(open('y.pickle', 'rb'))
whole_df = pickle.load(open('df.pickle', 'rb'))

@app.route('/')
def entry_page():
    return render_template('index.html')

@app.route('/change_radius', methods=['GET', 'POST'])
def change_rad():
	output = functions.return_sex(X)
	return jsonify(result=output)

@app.route('/get_drugs', methods=['GET', 'POST'])
def return_drugs():
	output = functions.return_drugs(whole_df)
	output_names = []
	output_values = []
	for item in output:
		output_names.append(item[0])
		output_values.append(item[1])

	return jsonify(names=output_names, values=output_values)

@app.route('/predict_drug_use', methods=['GET', 'POST'])
def check_applicant():
	name = request.form['applicant_name']
	age =  request.form['applicant_age']
	height = request.form['applicant_height']
	weight = request.form['applicant_weight']
	gender = request.form['gender']
	military = request.form['military']
	married = request.form['marital_status']
	times_married = request.form['times_married']
	live_parents = request.form['live_parents']
	household_income = request.form['household_income']
	overall_health = request.form['health']

	message = 'High probability of being a drug user'
	print(name)
	print(message)

	return jsonify(message=message)

if __name__ == '__main__':
    app.run(debug=True)
