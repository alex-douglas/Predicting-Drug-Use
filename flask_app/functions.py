import random

positive_values = {'MJREC': [1,2,8,11], 'COCREC': [1,2,8,11,12], 'CRAKREC': [1,2,8],
                   'HERREC': [1,2,8,11], 'METHAMREC': [1,2,8,11], 'PNRNMREC': [1,2,8],
                   'TRQNMREC': [1,2,8], 'STMNMREC': [1,2,8], 'SEDNMREC': [1,2,8], }

def return_ran_cig(dataframe):
	curr_int = random.randint(0, dataframe.shape[0])
	return dataframe['CIG30USE'].iloc[curr_int]

def return_sex(dataframe):
	sex_ratios = []
	denominator = dataframe.shape[0]

	sex_ratios.append(dataframe['IRSEX'].value_counts()[0] / denominator)
	sex_ratios.append(dataframe['IRSEX'].value_counts()[1] / denominator)
	return sex_ratios

def return_drugs(dataframe):
	total_drug_users =[]
	denominator = dataframe.shape[0]

	for key in positive_values:
	    total_users = 0
	    
	    for positive_value in positive_values[key]:
	        total_users += dataframe[key].value_counts()[positive_value]
	    
	    total_drug_users.append([key, total_users / denominator])

	return total_drug_users    