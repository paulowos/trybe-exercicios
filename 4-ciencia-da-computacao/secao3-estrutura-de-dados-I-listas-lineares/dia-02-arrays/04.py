def calc_students_in_specific_moment(check_ins, check_outs, moment):  # O(n)
    result = 0
    for i in range(len(check_ins)):
        if check_ins[i] <= moment <= check_outs[i]:
            result += 1
    return result
